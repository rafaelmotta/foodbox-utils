let ctrl = ($scope, $modal, $modalInstance, $window, hint, costumerAddressApi, orderResolved, storeResolved, statusesResolved) => {

  return new class Modal {

    constructor() {
      $scope.store = storeResolved;
      $scope.order = orderResolved;
      $scope.statuses = statusesResolved;

      $scope.orderClassStatus = {};

      if(order.address && order.address.latitude && order.address.longitude) {
        $scope.markers = [{ latitude: order.address.latitude, longitude: order.address.longitude, animate: true }, { latitude: store.address.latitude, longitude: store.address.longitude }];
        $scope.route = { destination: { latitude: order.address.latitude, longitude: order.address.longitude }, origin: { latitude: store.address.latitude, longitude: store.address.longitude } };
      }

    }

    // Avalia o pedido, e define os botões com status a serem exibidos
    evaluateOrderClass(status, show = true) {
      if($scope.order.order_type.alias === 'delivery_online' || $scope.order.order_type.alias === 'delivery_phone' || $scope.order.order_type.alias === 'sheduled') {
        switch($scope.order.status) {
          case 'sent'           : if (status.alias !== 'in_line' && status.alias !== 'sent') { show = false; break; }
          case 'in_line'        : if (status.alias !== 'in_progress' && status.alias !== 'cancelled' && status.alias !== 'in_line' ) { show = false; break; }
          case 'in_progress'    : if (status.alias !== 'pos_production' && status.alias !== 'cancelled' && status.alias !== 'in_progress') { show = false; break; }
          case 'pos_production' : if (status.alias !== 'delivering' && status.alias !== 'cancelled' && status.alias !== 'pos_production') { show = false; break; }
          case 'delivering'     : if (status.alias !== 'completed' && status.alias !== 'not_delivered' && status.alias !== 'delivering') { show = false; break; }
          case 'completed'      : if (status.alias !== 'delivering' && status.alias !== 'completed') { show = false; break; }
          case 'cancelled'      : if (status.alias !== 'in_progress' && status.alias !== 'cancelled') { show = false; break; }
          case 'not_delivered'  : if (status.alias !== 'delivering' && status.alias !== 'not_delivered') { show = false; }
        }
      }

      if($scope.order.order_type.alias === 'local' || $scope.order.order_type.alias === 'local_to_go') {
        switch($scope.order.status) {
          case 'in_line'        : if (status.alias !== 'in_progress' && status.alias !== 'cancelled' && status.alias !== 'in_line') { show = false; break; }
          case 'in_progress'    : if (status.alias !== 'pos_production' && status.alias !== 'cancelled' && status.alias !== 'in_progress') { show = false; break; }
          case 'pos_production' : if (status.alias !== 'completed' && status.alias !== 'cancelled' && status.alias !== 'pos_production') { show = false; break; }
          case 'delivering'     : show = false; break;
          case 'completed'      : if (status.alias !== 'completed') { show = false; break; }
          case 'cancelled'      : if (status.alias !== 'in_progress' && status.alias !== 'cancelled') { show = false; break; }
          case 'not_delivered'  : show = false;
        }
      }

      $scope.orderClassStatus[status.alias] = show;
    }

    // Altera o status do pedido
    changeStatus(status) {
      if($scope.order.status === status) {
        return false;
      }

      $scope.order.status = status;
      return $modalInstance.close({ order: $scope.order });
    }

    // Exibe modal para trocar de entregador
    changeCourier() {
      if($scope.order.status !== 'delivering') {
        return hint.error('Você só pode alterar o entregador quando o status for "Saiu para entrega"');
      }

      $modalInstance.close({ order: $scope.order });
    }

    // Exibe modal para alterar endereço
    changeAddress() {
      if($scope.order.status === 'completed' || $scope.order.status === 'cancelled') {
        return hint.error('Você não pode alterar o endereço do pedido quando o status for "Entregue" ou "Cancelado"');
      }

      let order = angular.copy($scope.order);

      // Abre modal para escolha do endereço
      costumerAddressApi.fetch($scope.order.costumer).then((response) => {
        order.costumer.addresses = response.data;

        $modal.open({
          templateUrl: 'orders/new/partials/_modal_costumer_address.html',
          windowClass: 'modal-costumer-address',
          controller: 'ModalCostumerAddressCtrl as ctrl',
          backdrop: 'static',
          resolve: {
            order:() => {
              return order;
            }
          }
        }).result.then(() => {
          if(order.address && order.address.shipping) {

            // Endereço é o mesmo
            if(order.address.id == $scope.order.address.id) {
              return hint.error('O endereço selecionado já é o endereço atual do pedido');
            }

            // Taxa de entrega do novo endereço é maior que a antiga - necessário confirmar
            if(parseFloat(order.address.shipping) > parseFloat($scope.order.shipping)) {
              let diff = parseFloat(order.address.shipping) - parseFloat($scope.order.shipping);

              if(!$window.confirm(`O novo endereço de entrega possui uma taxa de entrega R$${ diff } mais cara que o pedido atual. Deseja continuar?`)){
                return false;
              }
            }

            // Seta o endereço
            $scope.order.address = angular.copy(order.address);

            // Fecha o modal de detalhes enviando o objeto a ser salvo
            return $modalInstance.close({ order: $scope.order, onlySave: true });
          }
        });
      });
    }

    // Fecha o modal sem enviar os dados selecionados
    close() {
      $modalInstance.dismiss('close');
    }
  };
};

angular.module('foodbox.utils').controller('ModalOrderCtrl', ctrl);