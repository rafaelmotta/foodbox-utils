let ctrl = ($scope, $uibModalInstance, cartItemApi, cartResolved, productResolved, cartItemResolved, bonificationResolved) => {

  return new class ModalProductCustomizationCtrl {
    constructor() {
      $scope.product = productResolved;
      $scope.cart = cartResolved;

      let defaultCartItem = {
        id: cartItemResolved ? cartItemResolved.id : null,
        amount: cartItemResolved ? cartItemResolved.amount : 1,
        note: cartItemResolved ? cartItemResolved.note : null,
        total: $scope.product.price,
        product: $scope.product,
        bonificable: bonificationResolved ? true : false,
        cart_item_addons: []
      }

      for(let i in $scope.product.product_addon_categories) {
        let addonCategory = $scope.product.product_addon_categories[i];

        if (addonCategory.max === 1 && addonCategory.min === 1 || addonCategory.max === 1 && !addonCategory.min || !addonCategory.max && addonCategory.min === 1) {
          defaultCartItem.cart_item_addons[i] = addonCategory.product_addons[0];

          if(cartItemResolved && cartItemResolved.cart_item_addons_to_put.length) {
            let c = cartItemResolved.cart_item_addons_to_put[i];

            for(let j in $scope.product.product_addon_categories[i].product_addons) {
              if($scope.product.product_addon_categories[i].product_addons[j].id === cartItemResolved.cart_item_addons_to_put[i].product_addon_id) {
                defaultCartItem.cart_item_addons[i] = $scope.product.product_addon_categories[i].product_addons[j];
              }
            }
          }
        }

        for(let j in $scope.product.product_addon_categories[i].product_addons) {
          let addon = $scope.product.product_addon_categories[i].product_addons[j];

          if((addonCategory.max === 1 && addonCategory.min === 1) || (addonCategory.max === 1 && !addonCategory.min)|| (!addonCategory.max && addonCategory.min === 1))  {

          } else {
            let selected = false;

            if(cartItemResolved && cartItemResolved.cart_item_addons_to_put.length) {
              if(_.findWhere(cartItemResolved.cart_item_addons_to_put, { product_addon_id: addon.id })) {
                selected = true;
              }
            } else {
              if(addonCategory.auto_fill) {
                selected = true;
              }
            }

            if(!defaultCartItem.cart_item_addons[i]) {
              defaultCartItem.cart_item_addons[i] = [];
            }

            defaultCartItem.cart_item_addons[i][j] = {
              id: addon.id,
              price: addon.price,
              selected: selected
            };
          }
        }
      }

      $scope.cartItem = defaultCartItem;
    }

    // @name updatePrice
    // @description Altera preço do produto
    updatePrice() {
      let addonsPrice = 0;

      for(let i in $scope.cartItem.cart_item_addons) {
        let a = $scope.cartItem.cart_item_addons[i];

        if(a.id && a.price) {
          addonsPrice += parseFloat(a.price);
        } else {
          for(let j in a) {
            let addon = a[j];

            if(addon.selected) {
              addonsPrice += parseFloat(addon.price);
            }
          }
        }
      }

      $scope.cartItem.total = (parseFloat($scope.product.price) + addonsPrice) * $scope.cartItem.amount;
    }
    // @name add
    // @description Adiciona produto no carrinho
    add() {
      let method = this._getCartMethod();

      cartItemApi[method]($scope.cartItem, { cart_id: $scope.cart.id }).then((cart) => {
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

ctrl.$inject = ['$scope', '$uibModalInstance', 'cartItemApi', 'cartResolved', 'productResolved', 'cartItemResolved', 'bonificationResolved'];
angular.module('utils.foodio').controller('ModalProductCtrl', ctrl);
