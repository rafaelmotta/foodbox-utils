let ctrl = ($scope, $uibModalInstance, hint, cartItemApi, cartResolved, productResolved, cartItemResolved, bonificationResolved) => {

  return new class ModalProductCustomizationCtrl {
    constructor() {
      $scope.product = productResolved;
      $scope.cart = cartResolved;
      $scope.buttons = { disabled: false };

      this._bootstrapCartItem();
    }

    // @name updatePrice
    // @description Altera preço do produto
    updatePrice() {
      let addonsPrice = 0;

      for(let i in $scope.cartItem.cart_item_addons) {
        let a = $scope.cartItem.cart_item_addons[i];

        if (a.id && a.price !== null) {
          addonsPrice += parseFloat(a.price);
        } else {
          for(let j in a) {
            let addon = a[j];

            if (addon.amount) {
              addonsPrice += parseFloat(addon.price) * addon.amount;
            }
          }
        }
      }

      $scope.cartItem.total = (parseFloat($scope.product.price) + addonsPrice) * $scope.cartItem.amount;
    }

    // @name add
    // @description Adiciona produto no carrinho
    add() {
      this._validateAddons().then(() => {
        let method = $scope.cartItem.id ? 'update' : 'create';

        // Desabilita botão
        $scope.buttons.disabled = true;

        cartItemApi[method]($scope.cart, $scope.cartItem).then((cart) => {
          $uibModalInstance.close({ cart: cart.plain() });
        }, () => {
          $scope.buttons.disabled = false;
        });
      });
    }

    _validateAddons() {
      let errors = false;

      return new Promise((resolve, reject) => {
        for(let i in $scope.product.product_addon_categories) {
          let addonCategory = $scope.product.product_addon_categories[i];

          // Verifica se categoria tem o minímo permitido
          if(addonCategory.min) {
            let min = $scope.product.product_addon_categories[i].min;

            if (min) {
              var used = 0;

              for (var j in $scope.cartItem.cart_item_addons[i]) {
                var cartItemAddon = $scope.cartItem.cart_item_addons[i][j];

                if(!$scope.product.product_addon_categories[i].multiple) {
                  used += 1;
                } else {
                  used += cartItemAddon.amount;
                }
              }

              if (used < min) {
                errors = true;
                hint.error('Você precisa selecionar pelo menos ' + min + ' ingredientes na categoria ' + addonCategory.name);

                break;
              }
            }
          }
        }

        if(!errors) {
          resolve();
        }
      });
    }

    // @name increment
    // @description Incrementa o numero de ingredientes
    // @params { Integer } i - Posição da categoria do addon
    // @params { Integer } j - Posição do addon
    increment(i, j) {

      // Número de addons da categoria ultrapassou o máximo permitido
      if(this.hasReachedMaxByAddonCategory(i)) {
        return hint.error(`Você já selecionou o máximo de ingredientes permitidos para esta categoria`)
      }

      // Incrementa
      var item = $scope.cartItem.cart_item_addons[i][j];
      item.amount += 1;

      // Atualiza preço
      this.updatePrice();
    }

    // @name decrement
    // @description Decrementa o numero de ingredientes
    // @params { Integer } i - Posição da categoria do addon
    // @params { Integer } j - Posição do addon
    decrement(i, j) {
      var item = $scope.cartItem.cart_item_addons[i][j];
      // Decrementa se houver alguma quantidade
      if(item.amount) {
        item.amount -= 1;

        // Atualiza preço
        this.updatePrice();
      }
    }

    // @name hasReachedMaxByAddonCategory
    // @description Verifica se atingiu máximo permitido de addons em uma categoria
    // @params { Integer } i - Posição da categoria do addon
    hasReachedMaxByAddonCategory(i) {

      // Pega o máximo de uma categoria
      let max = $scope.product.product_addon_categories[i].max;

      // Se não houver máximo, returna false
      if(!max) { return false; }

      // Pega o total de ingredientes usados da categoria
      let used = 0;
      for(let j in $scope.cartItem.cart_item_addons[i]) {
        let cartItemAddon = $scope.cartItem.cart_item_addons[i][j];
        used+= cartItemAddon.amount;
      }

      // Atingiu máximo permitido
      if(used === max) {
        return true;
      }

      // Não atingiu máximo permitido
      return false;
    }

    // @name close
    // @description Fecha modal
    close() {
      $uibModalInstance.dismiss('close');
    }

    _bootstrapCartItem() {
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

          if(addonCategory.multiple)  {
            let amount = 0;

            if(cartItemResolved && cartItemResolved.cart_item_addons_to_put.length) {
              let cartItemAddon = _.findWhere(cartItemResolved.cart_item_addons_to_put, { product_addon_id: addon.id })
              if (cartItemAddon) {
                amount = cartItemAddon.amount;
              }
            } else {
              if(addonCategory.auto_fill) {
                amount = 1;
              }
            }

            if(!defaultCartItem.cart_item_addons[i]) {
              defaultCartItem.cart_item_addons[i] = [];
            }

            defaultCartItem.cart_item_addons[i][j] = {
              id: addon.id,
              price: addon.price,
              amount: amount
            };
          }
        }
      }

      $scope.cartItem = defaultCartItem;
    }
   };
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'hint', 'cartItemApi', 'cartResolved', 'productResolved', 'cartItemResolved', 'bonificationResolved'];
angular.module('utils.foodio').controller('ModalProductCtrl', ctrl);
