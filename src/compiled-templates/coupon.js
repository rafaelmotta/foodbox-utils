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
    '        <i class="fa fa-remove"></i>\n' +
    '      </span>\n' +
    '      <input type="text" ng-model="coupon.code" disabled readonly />\n' +
    '    </div>\n' +
    '    <div>\n' +
    '      <hr />\n' +
    '      <ul class="list-unstyled">\n' +
    '        <li ng-if="coupon.ends_at">\n' +
    '          <i class="fa fa-calendar"></i>\n' +
    '          Válido até <strong>{{ coupon.ends_at }}</strong>\n' +
    '        </li>\n' +
    '        <li ng-if="coupon.min_value">\n' +
    '          <i class="fa fa-shopping-cart"></i>\n' +
    '          Pedido minímo: <strong>{{ coupon.min_value | currency: "R$" }}</strong>\n' +
    '        </li>\n' +
    '        <li ng-show="coupon.type_of === \'shipping\'">\n' +
    '          <i class="fa fa-motorcycle"></i>\n' +
    '          {{ coupon.type_of | translate }}\n' +
    '        </li>\n' +
    '        <li ng-if="coupon.value">\n' +
    '          <i class="fa fa-ticket"></i>\n' +
    '          <span ng-show="coupon.type_of === \'absolute\'">\n' +
    '            Desconto de <strong>{{ coupon.value | currency: "R$" }}</strong>\n' +
    '          </span>\n' +
    '          <span ng-show="coupon.type_of === \'percetage\'">\n' +
    '            Desconto de <strong>{{ coupon.value }}%</strong>\n' +
    '          </span>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
