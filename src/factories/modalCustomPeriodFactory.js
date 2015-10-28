let modalCustomPeriod = ($modal, $templateCache) => {
  return new class ModalCustomPeriod {
    open(){
      return $modal.open({
        template: $templateCache.get('/templates/modal-custom-period.html'),
        controller: 'ModalCustomPeriodCtrl as ctrl',
        windowClass: 'modal-custom-period'
      });
    }
  };
};

modalCustomPeriod.$inject = ['$modal', '$templateCache'];
angular.module('utils.foodio').factory('modalCustomPeriod', modalCustomPeriod);