let modalCustomPeriod = ($uibModal, $templateCache) => {
  return new class ModalCustomPeriod {
    open(params = {}){
      return $uibModal.open({
        template: $templateCache.get('/templates/modal-custom-period.html'),
        controller: 'ModalCustomPeriodCtrl as ctrl',
        windowClass: 'modal-custom-period',
        resolve: {
          datePeriodResolved: () => {
            return params.datePeriod;
          }
        }
      });
    }
  };
};

modalCustomPeriod.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalCustomPeriod', modalCustomPeriod);