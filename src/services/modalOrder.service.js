let modal = ($modal, $templateCache) => {
  return new class Modal {
    open(type, order, store, statuses){
      return $modal.open({
        template: $templateCache.get('/templates/modal-order.html'),
        controller: 'ModalOrderCtrl as ctrl',
        windowClass: 'modal-order',
        resolve: {
          type:() => {
            if(type !== 'admin' || type !== 'costumer') {
              return 'costumer';
            }
            return type;
          },
          storeResolved:() => {
            return store;
          },
          statusesResolved:() => {
            return statuses;
          },
          orderResolvedd:() => {
            return order;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('modalOrder', modal);