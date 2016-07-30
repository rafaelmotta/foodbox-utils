let ctrl = ($scope, $uibModalInstance, addressResolved, onSubmitResolved) => {

  return new class ctrl {

    constructor() {
      $scope.address = addressResolved;
      $scope.onSubmit = onSubmitResolved;

      $scope.button = {
        disabled: false
      };
    }

    // @description Envia dados - tratamento deve ser feito de acordo com a necessidade da view
    submit() {
      this.toggleButtonState();
      let method = this._getMethod();

      $scope.onSubmit({ address: $scope.address, method: method }).then((response) => {
        this._afterSubmit(response, method);
      });
    }

    // @description Callback após enviar dados
    _afterSubmit(response, method) {
      this.toggleButtonState();
      $uibModalInstance.close({ address: response.data, method: method });
    }

    // @description Fecha modal
    close() {
      $uibModalInstance.dismiss('close');
    }

     // @description Retorna o método HTTP para se realizar
     _getMethod() {
      return $scope.address.id ? 'update' : 'create';
    }

    // @description Altera o estado do botão
    toggleButtonState() {
      $scope.button.disabled = !$scope.button.disabled;
    }
  };
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'addressResolved', 'onSubmitResolved'];
angular.module('utils.foodio').controller('ModalAddressCtrl', ctrl);
