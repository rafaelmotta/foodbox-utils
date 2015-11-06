let ctrl = ($scope, $modalInstance, TempCart, cartItemApi, cartResolved, storeProductResolved, cartItemResolved) => {

  return new class ModalProductCustomizationCtrl {
    constructor() {
      $scope.product = storeProductResolved;
      $scope.cart = cartResolved;
      $scope.cartItem = cartItemResolved;

      new TempCart($scope, cartItemResolved);
    }

    add() {
      cartItemApi[this._getCartMethod()]($scope.cartItem, { cart_id: $scope.cart.id }).then((cart) => {
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

ctrl.$inject = ['$scope', '$modalInstance', 'TempCart', 'cartItemApi', 'cartResolved', 'storeProductResolved', 'cartItemResolved'];
angular.module('utils.foodio').controller('ModalProductCtrl', ctrl);