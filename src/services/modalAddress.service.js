let modalAddres = ($modal, $templateCache) => {
  return class ModalAddress {
    open(address, meCtrl = true){
      return $modal.open({
        template: $templateCache.get('/templates/modal-address.html'),
        controller: meCtrl ? 'ModalMeAddressCtrl as ctrl' : 'ModalCostumerAddressCtrl as ctrl',
        windowClass: 'modal-address',
        resolve: {
          addressResolved: () => {
            return address;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('ModalAddress', modalAddres);