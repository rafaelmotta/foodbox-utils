let ctrl = ($scope, $modalInstance, $filter) => {

  return new class Ctrl {
    constructor() {
      let date = $filter('date')(new Date(), "dd/MM/yyyy");

      $scope.period  = { fromDate: date, toDate: date, fromTime: new Date().setHours(0,0,0,0), toTime: new Date().setHours(23, 59, 59, 0) };
      $scope.status  = { fromDate: false, toDate: false };
      $scope.options = { showWeeks: false };
    }

    // Abre o datepicker
    open(name) {
      $scope.status[name] = !$scope.status[name];
    }

    // Fecha o modal e envia os dados selecionados
    next() {
      $modalInstance.close($scope.period);
    }

    // Fecha o modal sem enviar os dados selecionados
    close() {
      $modalInstance.dismiss('close');
    }
  };
};

angular.module('foodbox.utils').controller('ModalCustomPeriodCtrl', ctrl);