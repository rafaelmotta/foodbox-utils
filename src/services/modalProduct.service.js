let modalProduct = ($modal, storeProductApi, $templateCache) => {
  return new class ModalProduct {
    open(params){

      if(!params.cart) {
        throw new Error('Modal Product service must have a cart');
      }

      if(!params.storeProduct) {
        throw new Error('Modal Product service must have a product');
      }

      if(!params.cartItem) {
        params.cartItem = false;
      }

      return $modal.open({
        template: $templateCache.get('/templates/modal-product.html'),
        controller: 'ModalProductCtrl as ctrl',
        windowClass: 'modal-product',
        resolve: {
          cartResolved: () => {
            return params.cart
          },
          storeProductResolved: () => {
            return storeProductApi.show(storeProduct).then((storeProduct) => {
              return  storeProduct.plain().data;
            });
          },
          cartItemResolved: () => {
            return params.cartItem;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('modalProduct', modalProduct);