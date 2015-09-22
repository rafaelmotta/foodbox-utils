let modalCustomPeriod = ($modal, $templateCache) => {
  return class ModalCustomPeriod {
    open(){
      return $modal.open({
        template: $templateCache.get('/templates/modal-custom-period.html'),
        controller: 'ModalCustomPeriodCtrl as ctrl',
        windowClass: 'modal-custom-period'
      });
    }
  };
};

angular.module('foodbox.utils').factory('ModalCustomPeriod', modalCustomPeriod);