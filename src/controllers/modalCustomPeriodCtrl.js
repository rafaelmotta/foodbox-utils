let ctrl = ($scope, $uibModalInstance, $filter) => {

  return new class ModalCustomPeriodCtrl {
    constructor() {
      $scope.period  = {
        fromDate: new Date(),
        toDate: new Date(),
        fromTime: new Date().setHours(0,0,0,0),
        toTime: new Date().setHours(23, 59, 59, 0)
      };

      $scope.popups = {
        fromDate: {
          opened: false,
          options: {}
        },
        toDate: {
          opened: false,
          options: {}
        }
      };
    }

    // Abre o datepicker
    open(name) {
      $scope.popups[name].opened = !$scope.popups[name].opened;
    }

    // Fecha o modal e envia os dados selecionados
    next() {
      $uibModalInstance.close($scope.period);
    }

    // Fecha o modal sem enviar os dados selecionados
    close() {
      $uibModalInstance.dismiss('close');
    }
  };
};

ctrl.$inject = ['$scope', '$uibModalInstance', '$filter'];
angular.module('utils.foodio').controller('ModalCustomPeriodCtrl', ctrl);