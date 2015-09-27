let modalProductCtrl = ($scope, $modalInstance, TempCart, meCartItemApi, cartResolved, storeProductResolved, cartItemResolved) => {

  return new class ModalProductCustomizationCtrl {
    constructor() {
      $scope.product = storeProductResolved;
      $scope.cart = cartResolved;
      $scope.cartItem = cartItemResolved;

      new TempCart($scope, cartItemResolved);
    }

    add() {
      meCartItemApi[this._getCartMethod()]($scope.cartItem, { cart_id: $scope.cart.id }).then((cart) => {
        $modalInstance.close({ cart: cart.plain() });
      });
    }

    close() {
      $modalInstance.dismiss('close');
    }

    _getCartMethod() {
      return $scope.cartItem.id ? 'update' : 'create';
    }
  };
};

angular.module('foodbox.utils').controller('ModalProductCtrl', modalProductCtrl);
