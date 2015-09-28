let modal = ($modal, $templateCache) => {
  return new class Modal {
    open(params = {}){
      return $modal.open({
        template: $templateCache.get('/templates/modal-order.html'),
        controller: 'ModalOrderCtrl as ctrl',
        windowClass: 'modal-order',
        resolve: {
          type:() => {
            if(params.type !== 'admin' || params.type !== 'costumer') {
              return 'costumer';
            }
            return params.type;
          },
          storeResolved:() => {
            return params.store;
          },
          statusesResolved:() => {
            return params.statuses;
          },
          orderResolvedd:() => {
            return params.order;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('modalOrder', modal);