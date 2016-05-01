let ctrl = ($scope, $uibModalInstance, datePeriodResolved) => {

  return new class ModalCustomPeriodCtrl {
    constructor() {

      $scope.datePeriod = datePeriodResolved;

      $scope.period  = {
        fromDate: $scope.datePeriod.fromDate || new Date(),
        toDate: $scope.datePeriod.fromDate || new Date(),
        fromTime: $scope.datePeriod.fromDate || new Date().setHours(0,0,0,0),
        toTime: $scope.datePeriod.fromDate || new Date().setHours(23, 59, 59, 0)
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

ctrl.$inject = ['$scope', '$uibModalInstance', 'datePeriodResolved'];
angular.module('utils.foodio').controller('ModalCustomPeriodCtrl', ctrl);