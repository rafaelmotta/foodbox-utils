let ctrl = ($scope, $uibModalInstance, cartItemApi, cartResolved, productResolved, cartItemResolved) => {

  return new class ModalProductCustomizationCtrl {
    constructor() {
      $scope.product = productResolved;
      $scope.cart = cartResolved;

      let defaultCartItem = {
        amount: 1,
        note: null,
        total: $scope.product.price,
        product: $scope.product,
        cart_item_addons_to_remove: [],
        cart_item_addons_to_put: []
      }

      $scope.cartItem = cartItemResolved || defaultCartItem;
    }

    // @name updatePrice
    // @description Altera preço do produto
    updatePrice() {
      let addonsPrice = 0;

      for(let i in $scope.cartItem.cart_item_addons_to_put) {
        let addon = $scope.cartItem.cart_item_addons_to_put[i];
        addonsPrice += parseFloat(addon.price);
      }

      $scope.cartItem.total = (parseFloat($scope.product.price) + addonsPrice) * $scope.cartItem.amount;
    }
    // @name add
    // @description Adiciona produto no carrinho
    add() {
      cartItemApi[this._getCartMethod()]($scope.cartItem, { cart_id: $scope.cart.id }).then((cart) => {
        $uibModalInstance.close({ cart: cart.plain() });
      });
    }

    // @name close
    // @description Fecha modal
    close() {
      $uibModalInstance.dismiss('close');
    }

    _getCartMethod() {
      return $scope.cartItem.id ? 'update' : 'create';
    }
  };
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'cartItemApi', 'cartResolved', 'productResolved', 'cartItemResolved'];
angular.module('utils.foodio').controller('ModalProductCtrl', ctrl);
