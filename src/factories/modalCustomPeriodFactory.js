let modalCustomPeriod = ($uibModal, $templateCache) => {
  return new class ModalCustomPeriod {
    open(datePeriod = null){
      return $uibModal.open({
        template: $templateCache.get('/templates/modal-custom-period.html'),
        controller: 'ModalCustomPeriodCtrl as ctrl',
        windowClass: 'modal-custom-period',
        resolve() {
          datePeriodResolved: () => {
            return datePeriod;
          }
        }
      });
    }
  };
};

modalCustomPeriod.$inject = ['$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('modalCustomPeriod', modalCustomPeriod);