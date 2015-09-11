let modalProduct = ($modal, storeProductApi, $templateCache) => {
  return class ModalProduct {
    open(cart, storeProduct, cartItem = false){
      return $modal.open({
        templateUrl: $templateCache.get('templates/modal-product.html'),
        controller: 'ModalProductCtrl as ctrl',
        windowClass: 'modal-product',
        resolve: {
          cartResolved: () => {
            return cart;
          },
          storeProductResolved: () => {
            return storeProductApi.show(storeProduct).then((storeProduct) => {
              return storeProduct.plain();
            });
          },
          cartItemResolved: () => {
            return cartItem;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('ModalProduct', modalProduct);