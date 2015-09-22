let modalRating = ($modal, $templateCache) => {
  return class ModalRating {
    open(order){
      return $modal.open({
        template: $templateCache.get('/templates/modal-rating.html'),
        controller: 'ModalRatingCtrl as ctrl',
        windowClass: 'modal-rating',
        resolve: {
          orderResolvedd: () => {
            return order;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('ModalRating', modalRating);