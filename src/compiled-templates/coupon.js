(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/coupon.html',
    '<div class="coupon-panel-container">\n' +
    '  <div class="thumbnail">\n' +
    '    <i class="fa fa-ticket icon-ticket"></i>\n' +
    '    <div class="input-group">\n' +
    '      <span class="input-group-addon">\n' +
    '        <i class="fa fa-code"></i>\n' +
    '      </span>\n' +
    '      <input type="text" ng-model="options.code" disabled readonly />\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <hr />\n' +
    '      <ul class="list-unstyled">\n' +
    '        <li ng-if="options.ends_at">\n' +
    '          <i class="fa fa-calendar"></i>\n' +
    '          Válido até <strong>{{ options.ends_at }}</strong>\n' +
    '        </li>\n' +
    '        <li ng-if="options.min_value">\n' +
    '          <i class="fa fa-shopping-cart"></i>\n' +
    '          Pedido minímo: <strong>{{ options.min_value | currency: "R$" }}</strong>\n' +
    '        </li>\n' +
    '        <li ng-show="options.type_of === \'shipping\'">\n' +
    '          <i class="fa fa-motorcycle"></i>\n' +
    '          {{ options.type_of | translate }}\n' +
    '        </li>\n' +
    '        <li ng-if="options.value">\n' +
    '          <i class="fa fa-ticket"></i>\n' +
    '          <span ng-show="options.type_of === \'absolute\'">\n' +
    '            Desconto de <strong>{{ options.value | currency: "R$" }}</strong>\n' +
    '          </span>\n' +
    '          <span ng-show="options.type_of === \'percetage\'">\n' +
    '            Desconto de <strong>{{ options.value }}%</strong>\n' +
    '          </span>\n' +
    '        </li>\n' +
    '        <li ng-if="options.conditions">\n' +
    '          <div ng-repeat="condition in options.conditions">\n' +
    '            <div ng-if="condition.type === \'PaymentMethod\' && condition.itens.length > 0">\n' +
    '              <i class="fa fa-credit-card"></i>\n' +
    '              Forma de pagamento\n' +
    '              <ul class="list-unstyled">\n' +
    '                <li ng-repeat="type in condition.types">\n' +
    '                  {{ type.alias | translate }}\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
