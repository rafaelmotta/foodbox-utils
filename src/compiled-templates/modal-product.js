(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-product.html',
    '<div class="modal-header">\n' +
    '  <button type="button" class="close" data-dismiss="modal" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' +
    '  <h4 class="modal-title">\n' +
    '    {{ product.name }} <span>{{ cartItem.total | currency: "R$" }}</span>\n' +
    '  </h4>\n' +
    '</div>\n' +
    '<div class="modal-body clearfix">\n' +
    '  <div class="row">\n' +
    '    <aside class="col-md-5">\n' +
    '      <img class="product-image img-thumbnail" ng-src="{{ product.img.medium }}" width="280" height="280" alt="Foto do produto com nome {{ product.name }}">\n' +
    '      <p class="product-description" ng-if="product.club_points">\n' +
    '        <i class="fa fa-trophy"></i>\n' +
    '        Ganhe <strong>{{ cartItem.amount * product.club_points }}</strong> pontos\n' +
    '        <a href="#" uib-tooltip="Ao comprar esse produto você ganha {{ product.club_points }} pontos no nosso programa de fidelidade" tooltip-placement="bottom" tooltip-append-to-body="true">\n' +
    '          <i class="fa fa-info-circle"></i>\n' +
    '        </a>\n' +
    '      </p>\n' +
    '      <p class="product-description" ng-if="product.enable_to_change_in_club">\n' +
    '        <i class="fa fa-exchange"></i>\n' +
    '        Disponível para troca\n' +
    '        <a href="#" uib-tooltip="Produto disponível para troca no nosso programa de fidelidade. A partir de {{ product.club_price }} pontos por unidade." tooltip-placement="bottom" tooltip-append-to-body="true">\n' +
    '          <i class="fa fa-info-circle"></i>\n' +
    '        </a>\n' +
    '      </p>\n' +
    '      <div class="product-description" ng-if="product.bonifications.length">\n' +
    '        <i class="fa fa-trophy"></i>\n' +
    '        Você tem direito a:\n' +
    '          <ul>\n' +
    '            <li ng-repeat="(key, b) in product.bonifications">\n' +
    '              <strong>{{ b.amount }}x</strong> {{ b.bonification.name }}\n' +
    '            </li>\n' +
    '          </ul>\n' +
    '        <div>\n' +
    '          <small>\n' +
    '            Alguns desses itens devem ser adicionados manualmente, geralmente na aba \'Extras\'.\n' +
    '          </small>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </aside>\n' +
    '    <section class="col-md-7">\n' +
    '      <div ng-if="product.description">\n' +
    '        <label>Descrição:</label>\n' +
    '        <blockquote ng-bind-html="product.description"></blockquote>\n' +
    '      </div>\n' +
    '      <label for="cart-item-amount">Selecione a quantidade:</label>\n' +
    '      <select id="cart-item-amount" ng-model="cartItem.amount" ng-options="i as i for i in [1,2,3,4,5,6,7,8,9,10]" ng-change="ctrl.updatePrice()"></select>\n' +
    '      <hr ng-show="product.product_addon_categories.length > 0">\n' +
    '      <div ng-repeat="(key, addonCategory) in product.product_addon_categories" class="addon-categories-list">\n' +
    '        <div class="addon-category-name">\n' +
    '          {{ addonCategory.name }}\n' +
    '          <small ng-show="!addonCategory.max && !addonCategory.min">Escolha quantas opções desejar</span></small>\n' +
    '          <small ng-show="!addonCategory.max && addonCategory.min">\n' +
    '            Escolha pelo menos {{ addonCategory.min }} <span ng-show="addonCategory.min === 1">opção</span><span ng-show="addonCategory.min > 1">opções</span>\n' +
    '          </small>\n' +
    '          <small ng-show="addonCategory.max">\n' +
    '            <span ng-show="addonCategory.max === 1 && addonCategory.min === 1 || addonCategory.max === 1 && !addonCategory.min">Escolha ao menos 1 ingrediente</span>\n' +
    '            <span ng-show="addonCategory.max > 1 && addonCategory.min >= 1">Escolha entre {{ addonCategory.min }} à {{ addonCategory.max }} opções</span>\n' +
    '            <span ng-show="addonCategory.max > 1 && !addonCategory.min">Escolha até {{ addonCategory.max }} opções</span>\n' +
    '          </small>\n' +
    '        </div>\n' +
    '        <div class="addons-list">\n' +
    '          <div ng-repeat="(_key, addon) in addonCategory.product_addons" class="addon-item">\n' +
    '\n' +
    '            <label ng-disabled="!addon.available" ng-if="!addonCategory.multiple">\n' +
    '              <input type="radio" ng-model="cartItem.cart_item_addons[key]" ng-change="ctrl.updatePrice()" ng-disabled="!addon.available" ng-value="addon" />\n' +
    '              {{ addon.name }}\n' +
    '              <a ng-if="addon.club_points" href="#" uib-tooltip="Ao comprar esse ingrediente você ganha {{ addon.club_points }} pontos no nosso programa de fidelidade" tooltip-placement="bottom" tooltip-append-to-body="true">\n' +
    '                <i class="fa fa-trophy"></i>\n' +
    '              </a>\n' +
    '              <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' +
    '              <span class="addon-unavailable" ng-show="!addon.available">Ingrediente não disponível</span>\n' +
    '              <span class="addon-description" ng-show="addon.available && addon.description">{{ addon.description }}</span>\n' +
    '            </label>\n' +
    '\n' +
    '            <label ng-disabled="!addon.available" ng-if="addonCategory.multiple && !addonCategory.allow_amount">\n' +
    '              <input type="checkbox" ng-model="cartItem.cart_item_addons[key][_key].amount" ng-true-value="1" ng-false-value="0" ng-change="ctrl.updatePrice()" ng-disabled="!addon.available" />\n' +
    '              {{ addon.name }}\n' +
    '              <a ng-if="addon.club_points" href="#" uib-tooltip="Ao comprar esse ingrediente você ganha {{ addon.club_points }} pontos no nosso programa de fidelidade" tooltip-placement="bottom" tooltip-append-to-body="true">\n' +
    '                <i class="fa fa-trophy"></i>\n' +
    '              </a>\n' +
    '              <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' +
    '              <span class="addon-unavailable" ng-show="!addon.available">Ingrediente não disponível</span>\n' +
    '            </label>\n' +
    '\n' +
    '            <label class="clearfix" ng-disabled="!addon.available" ng-if="addonCategory.multiple && addonCategory.allow_amount">\n' +
    '              <span class="addon-name">{{ addon.name }}</span>\n' +
    '              <a ng-if="addon.club_points" href="#" uib-tooltip="Ao comprar esse ingrediente você ganha {{ addon.club_points }} pontos no nosso programa de fidelidade" tooltip-placement="bottom" tooltip-append-to-body="true">\n' +
    '                <i class="fa fa-trophy"></i>\n' +
    '              </a>\n' +
    '              <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' +
    '              <span class="addon-unavailable" ng-show="!addon.available">Ingrediente não disponível</span>\n' +
    '\n' +
    '              <div class="btn-group">\n' +
    '                <button class="btn btn-sm btn-danger" ng-click="ctrl.decrement(key, _key)">\n' +
    '                  <i class="fa fa-minus-circle"></i>\n' +
    '                </button>\n' +
    '                <input\n' +
    '                  disabled\n' +
    '                  class="input-sm addon-amount"\n' +
    '                  ng-model="cartItem.cart_item_addons[key][_key].amount" />\n' +
    '                <button class="btn btn-sm btn-success" ng-click="ctrl.increment(key, _key)">\n' +
    '                  <i class="fa fa-plus-circle"></i>\n' +
    '                </button>\n' +
    '              </div>\n' +
    '            </label>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '      <hr>\n' +
    '      <label for="cart-item-note">Deseja fazer alguma observação?</label>\n' +
    '      <textarea id="cart-item-note" rows="3" ng-model="cartItem.note"></textarea>\n' +
    '      <limit maxlength="150" model="cartItem.note"></limit>\n' +
    '    </section>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="!cartItem.id" ng-disabled="buttons.disabled">\n' +
    '    <i class="fa" ng-class="{ \'fa-plus-square\': !buttons.disabled, \'fa-spinner fa-spin\': buttons.disabled }"></i>\n' +
    '    Adicionar\n' +
    '  </button>\n' +
    '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="cartItem.id" ng-disabled="buttons.disabled">\n' +
    '    <i class="fa" ng-class="{ \'fa-pencil\': !buttons.disabled, \'fa-spinner fa-spin\': buttons.disabled }"></i>\n' +
    '    Editar\n' +
    '  </button>\n' +
    '  <button class="btn btn-default" ng-click="ctrl.close()" ng-disabled="buttons.disabled">\n' +
    '    Cancelar\n' +
    '  </button>\n' +
    '</div>\n' +
    '');
}]);
})();
