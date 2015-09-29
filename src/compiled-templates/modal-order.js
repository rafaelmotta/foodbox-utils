(function(module) {
try {
  module = angular.module('foodbox.utils');
} catch (e) {
  module = angular.module('foodbox.utils', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-order.html',
    '<div class="modal-header modal-header-with-options">\n' +
    '  <h3 class="modal-title">Detalhes do pedido #{{ order.store_number }}</h3>\n' +
    '  <div class="btn-group modal-options">\n' +
    '    <button type="button" ng-click="ctrl.changeStatus(status.alias)" class="btn btn-default" ng-class="{ active: order.status === status.alias, hide: !orderClassStatus[status.alias] }" ng-disabled="order.status === status.alias" ng-repeat="status in statuses" ng-init="ctrl.evaluateOrderClass(status)">{{ status.name }}</button>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '  <div class="panel panel-default" ng-show="order.error_reason_msg">\n' +
    '    <div class="panel-heading">\n' +
    '      <i class="icon icon-times-circle"></i>\n' +
    '       Razão de erro\n' +
    '    </div>\n' +
    '    <div class="panel-body">\n' +
    '      {{ order.error_reason_msg }}\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="panel panel-default" ng-show="order.note">\n' +
    '    <div class="panel-heading">\n' +
    '      <i class="icon icon-pencil"></i>\n' +
    '       Observação\n' +
    '    </div>\n' +
    '    <div class="panel-body">\n' +
    '      {{ order.note }}\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="panel panel-default" ng-show="order.courier">\n' +
    '    <div class="panel-heading">\n' +
    '      <i class="icon icon-motorcycle"></i>\n' +
    '        Entregador\n' +
    '        <small class="change" ng-show="order.status === \'delivering\'">\n' +
    '          <a href="javascript:void(0)" ng-click="ctrl.changeCourier()">\n' +
    '            <i class="icon icon-pencil"></i>\n' +
    '            Alterar\n' +
    '          </a>\n' +
    '        </small>\n' +
    '    </div>\n' +
    '    <div class="panel-body">\n' +
    '      <div class="alert alert-warning" ng-if="!order.courier" style="margin-bottom: 0;">\n' +
    '        Nenhum entregador associado a este pedido.\n' +
    '      </div>\n' +
    '      <div class="row" ng-if="order.courier">\n' +
    '        <div class="col-md-3">\n' +
    '          <div class="panel panel-default panel-courier">\n' +
    '            <img class="product-image" ng-src="{{ order.courier.avatar.medium }}" width="150" height="150">\n' +
    '            <div class="panel-footer">\n' +
    '              {{ order.courier.name }}\n' +
    '            </div>\n' +
    '          </div>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="panel panel-default">\n' +
    '    <div class="panel-heading">\n' +
    '      <i class="icon icon-shopping-cart"></i>\n' +
    '       Detalhes do pedido\n' +
    '    </div>\n' +
    '    <div class="panel-body no-padding">\n' +
    '      <table>\n' +
    '        <thead>\n' +
    '          <tr>\n' +
    '            <th style="width: 20%;">Item</th>\n' +
    '            <th style="width: 10%;">Quantidade</th>\n' +
    '            <th style="width: 40%;">Detalhes</th>\n' +
    '            <th style="width: 20%;">Obs.</th>\n' +
    '            <th style="width: 10%;">Total</th>\n' +
    '          </tr>\n' +
    '        </thead>\n' +
    '        <tbody>\n' +
    '          <tr ng-repeat="product in order.cart.products">\n' +
    '            <td>{{ product.name }}</td>\n' +
    '            <td>{{ product.amount }} un.</td>\n' +
    '            <td>\n' +
    '              <ul class="product-list">\n' +
    '                <li ng-show="product.addons_base.length > 0">\n' +
    '                  <strong>Ingredientes base:</strong>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="addon in product.addons_base">\n' +
    '                      {{ addon.name }}\n' +
    '                      <span class="label label-success" ng-if="addon.price && addon.price > 0">{{ addon.price  | currency: "R$" }}</span>\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                </li>\n' +
    '                <li ng-show="product.addons_opt.length > 0">\n' +
    '                  <strong>Adicionais</strong>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="addon in product.addons_opt">\n' +
    '                      {{ addon.name }}\n' +
    '                      <span class="label label-success" ng-if="addon.price && addon.price > 0">{{ addon.price  | currency: "R$" }}</span>\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                </li>\n' +
    '                <li ng-show="(product.addons_to_remove.length > 0) && (product.addons_to_remove.length < product.addons_to_put.length)">\n' +
    '                  <strong>Ingredientes para remover</strong>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="addon in product.addons_to_remove">\n' +
    '                      <span class="label label-danger">Sem</span> {{ addon.name }}\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                </li>\n' +
    '                <li ng-show="(product.addons_to_put.length > 0) && (product.addons_to_put.length < product.addons_to_remove.length)">\n' +
    '                  <strong>Ingredientes a colocar</strong>\n' +
    '                  <ul>\n' +
    '                    <li ng-repeat="addon in product.addons_to_put">\n' +
    '                      <span class="label label-success">Com</span> {{ addon.name }}\n' +
    '                    </li>\n' +
    '                  </ul>\n' +
    '                </li>\n' +
    '              </ul>\n' +
    '            </td>\n' +
    '            <td>\n' +
    '              {{ product.note || \'-\' }}\n' +
    '            </td>\n' +
    '            <td>{{ product.total | currency: \'R$\'}}</td>\n' +
    '          </tr>\n' +
    '        </tbody>\n' +
    '      </table>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="panel panel-default" ng-show="order.address">\n' +
    '    <div class="panel-heading">\n' +
    '      <i class="icon icon-map-marker"></i>\n' +
    '       Endereço\n' +
    '       <small>{{ order.address.street }} <span ng-show="order.address.number">- {{ order.address.number }}</span> <span ng-show="order.address.complement">- {{ order.address.complement }}</span></small>\n' +
    '       <small class="change" ng-show="order.status !== \'completed\' || order.status !== \'cancelled\'">\n' +
    '        <a href="javascript:void(0)" ng-click="ctrl.changeAddress()">\n' +
    '          <i class="icon icon-pencil"></i>\n' +
    '          Alterar\n' +
    '        </a>\n' +
    '      </small>\n' +
    '    </div>\n' +
    '    <div class="panel-body no-padding">\n' +
    '      <div class="order-map">\n' +
    '        <map id="address-map" latitude="order.address.latitude" longitude="order.address.longitude" markers="markers" route="route"></map>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <div class="panel panel-default">\n' +
    '    <div class="panel-heading">\n' +
    '      <i class="icon icon-file-text"></i>\n' +
    '      Histórico de alteração de status\n' +
    '    </div>\n' +
    '    <div class="panel-body no-padding clearfix">\n' +
    '      <div>\n' +
    '        <table class="table table-striped">\n' +
    '          <thead>\n' +
    '            <tr>\n' +
    '              <th style="width: 50%;">Status</th>\n' +
    '              <th style="width: 50%;">Horário de alteração</th>\n' +
    '            </tr>\n' +
    '          </thead>\n' +
    '          <tbody>\n' +
    '            <tr ng-repeat="status in statuses" ng-class="{ success: order.status === status.alias }">\n' +
    '              <td>{{ status.name }}</td>\n' +
    '              <td>{{ (order.order_status_progress[status.alias] | date: \'HH:mm:ss\') || \'-\' }}</td>\n' +
    '            </tr>\n' +
    '          </tbody>\n' +
    '        </table>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '<div class="modal-footer">\n' +
    '  <button class="btn btn-default" ng-click="ctrl.close()">Fechar</button>\n' +
    '</div>');
}]);
})();
