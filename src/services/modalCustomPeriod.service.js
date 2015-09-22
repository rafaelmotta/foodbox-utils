let service = ($modal, $templateCache) => {
  return class ModalPeriod {
    open(order){
      return $modal.open({
        templateUrl: $templateCache.get('/templates/modal-custom-period.html'),
        controller: 'ModalCustomPeriodCtrl as ctrl',
        windowClass: 'modal-custom-period'
      });
    }
  };
};

angular.module('foodbox.utils').factory('ModalCustomPeriod', service);