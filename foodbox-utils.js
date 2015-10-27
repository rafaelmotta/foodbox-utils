'use strict';

var app = angular.module('foodbox.utils', ['ngStorage']);
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/back-button.html', '<a href="javascript:history.back()" class="btn btn-default">Voltar</a>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/box.html', '<div class="box-container">\n' + '  <div class="box-header" ng-hide="hideHeader">\n' + '    <h2>\n' + '      <i class="icon icon-{{ icon }}"></i>\n' + '      {{ title }}\n' + '    </h2>\n' + '  </div>\n' + '  <div ng-transclude class="box-content {{ sizeClass }} {{ hideHeader ? \'box-hide-header\' : \'\' }}">\n' + '  </div>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/delete-button.html', '<button class="{{ class || \'btn btn-default btn-xs\' }}">\n' + '  <i class="icon icon-{{ icon || \'trash-o\' }}"></icon>\n' + '</button>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/edit-button.html', '<button class="btn btn-warning btn-xs">\n' + '  <i class="icon icon-{{ icon || \'pencil\' }}"></icon>\n' + '</button>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/experience-points.html', '<div class="experience-points-container">\n' + '  <div class="total-points"><i class="icon icon-shirtsinbulk"></i>3000 pontos</div>\n' + '  <div class="progress">\n' + '    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n' + '      <span class="sr-only">60% Complete</span>\n' + '    </div>\n' + '  </div>\n' + '  <div class="level-container">\n' + '    <div class="current-level">\n' + '      Level 5\n' + '    </div>\n' + '    <div class="next-level">\n' + '      <span>165 pontos para</span>\n' + '      Level 6\n' + '    </div>\n' + '  </div>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/form-group.html', '<div class="form-group" >\n' + '  <div ng-if="!vertical">\n' + '    <label for="{{ id }}" class="col-sm-4 control-label">{{ label }}\n' + '      <span ng-show="required" tooltip="Campo obrigatório" class="required-marker">*</span>\n' + '    </label>\n' + '    <div class="col-sm-8" ng-transclude></div>\n' + '  </div>\n' + '  <div ng-if="vertical">\n' + '    <label for="{{ id }}" class="control-label">{{ label }}</label>\n' + '    <div ng-transclude></div>\n' + '  </div>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/limit.html', '<p class="help-block">Restando <strong>{{ maxlength - length }}</strong> caracteres</p>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/map.html', '<div class="map-canvas"></div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-address.html', '<div class="modal-header">\n' + '  <h4 class="modal-title" ng-hide="address.id">Adicionar</h4>\n' + '  <h4 class="modal-title" ng-show="address.id">Editar</h4>\n' + '</div>\n' + '<div class="modal-body clearfix">\n' + '  <form name="addressForm" class="form-horizontal" ng-submit="ctrl.submit()">\n' + '    <form-group label="Nome" required="true">\n' + '      <input type="text" tabindex="1" ng-model="address.name" autofocus />\n' + '    </form-group>\n' + '    <form-group label="CEP" required="true">\n' + '      <input type="text" tabindex="2" ng-model="address.zipcode" required mask="99999-999" auto-unmask="true" zipcode zipcode-model="address" />\n' + '    </form-group>\n' + '    <form-group label="Cidade" required="true">\n' + '      <input type="text" tabindex="3" ng-model="address.city.name" disabled required />\n' + '    </form-group>\n' + '    <form-group label="Bairro" required="true">\n' + '      <input type="text" tabindex="4" ng-model="address.neighborhood.name" disabled required />\n' + '    </form-group>\n' + '    <form-group label="Rua" required="true">\n' + '      <input type="text" tabindex="5" ng-model="address.street" disabled required />\n' + '    </form-group>\n' + '    <form-group label="Número" required="true">\n' + '      <input type="text" tabindex="6" ng-model="address.number" required />\n' + '    </form-group>\n' + '    <form-group label="Complemento">\n' + '      <textarea ng-model="address.complement" tabindex="7" rows="3"></textarea>\n' + '    </form-group>\n' + '    <div class="modal-footer">\n' + '      <button class="btn btn-success">Salvar</button>\n' + '      <button class="btn btn-default" type="button" ng-click="ctrl.close()">Cancelar</button>\n' + '    </div>\n' + '  </form>\n' + '</div>\n' + '');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-chat.html', '<div class="modal-header">\n' + '  <button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' + '  <h4 class="modal-title">Mensagens ({{ chat.messages.length }})</h4>\n' + '</div>\n' + '<div class="modal-body">\n' + '  <ul class="list-unstyled">\n' + '    <li ng-repeat="m in chat.messages | orderBy: \'-id\'">\n' + '      <div class="row">\n' + '        <div class="col-md-2">\n' + '          <img ng-src="{{ m.user.photo }}" alt="Avatar" class="img-thumbnail" width="100" height="100"/>\n' + '        </div>\n' + '        <div class="col-md-10">\n' + '          <div class="message-user">\n' + '            <span ng-show="m.user.id === user.id && m.userable_type === userType">Você</span>\n' + '            <span ng-show="m.user.id !== user.id && m.userable_type === userType">{{ m.user.name }}</span>\n' + '            <span ng-show="m.userable_type === \'Costumer\'">{{ m.user.name }}</span>\n' + '            <small>{{ m.created_at }}</small>\n' + '          </div>\n' + '          <p>{{ m.content }}</p>\n' + '        </div>\n' + '      </div>\n' + '    </li>\n' + '  </ul>\n' + '  <form ng-submit="ctrl.send()" name="form">\n' + '    <div class="row">\n' + '      <div class="col-md-10">\n' + '        <textarea rows="4" ng-model="message.content" placeholder="Digite sua mensagem" autofocus required ng-maxlength="500" ng-keyup="ctrl.onKeyUp($event)"></textarea>\n' + '      </div>\n' + '      <div class="col-md-2">\n' + '        <button class="btn btn-success btn-block" ng-disabled="message.content.length < 1">\n' + '          Enviar\n' + '        </button>\n' + '      </div>\n' + '    </div>\n' + '  </form>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-crop.html', '<div class="modal-header">\n' + '  <button type="button" class="close" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' + '  <h4 class="modal-title">Recorte a imagem</h4>\n' + '</div>\n' + '<div class="modal-body">\n' + '  <img ng-src="{{ imgToCrop }}" ng-cropper ng-cropper-options="options" alt="Imagem a ser recortada" ng-cropper-show="showEvent" />\n' + '</div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-primary" ng-click="ctrl.crop()">Salvar</button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-custom-period.html', '<div class="modal-header">\n' + '  <h4 class="modal-title">Escolher período</h4>\n' + '</div>\n' + '<div class="modal-body clearfix">\n' + '  <div class="row">\n' + '    <div class="col-md-6" ng-click="ctrl.open(\'fromDate\')">\n' + '      <div class="input-group">\n' + '        <input ng-model="period.fromDate" datepicker-options="options" datepicker-popup="dd/MM/yyyy" is-open="status.fromDate" disabled />\n' + '        <div class="input-group-addon">\n' + '          <i class="icon icon-calendar"></i>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '    <div class="col-md-6" ng-click="ctrl.open(\'toDate\')">\n' + '      <div class="input-group">\n' + '        <input ng-model="period.toDate" datepicker-options="options" datepicker-popup="dd/MM/yyyy" is-open="status.toDate" disabled />\n' + '        <div class="input-group-addon">\n' + '          <i class="icon icon-calendar"></i>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '  </div>\n' + '  <hr />\n' + '  <div class="row">\n' + '    <div class="col-md-6">\n' + '      <timepicker ng-model="period.fromTime" readonly-input="true" hour-step="1" minute-step="15" show-meridian="false" prevent-table="true" style="margin: 0 auto;"></timepicker>\n' + '    </div>\n' + '    <div class="col-md-6">\n' + '      <timepicker ng-model="period.toTime" readonly-input="true" hour-step="1" minute-step="15" show-meridian="false" prevent-table="true" style="margin: 0 auto;"></timepicker>\n' + '    </div>\n' + '  </div>\n' + '</div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-default" type="button" ng-click="ctrl.close()">Cancelar</button>\n' + '  <button class="btn btn-success" ng-click="ctrl.next()">Próximo</button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-product.html', '<div class="modal-header">\n' + '  <button type="button" class="close" data-dismiss="modal" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' + '  <div class="modal-title">\n' + '    <i class="icon icon-shopping-cart"></i>\n' + '    {{ product.name }}\n' + '  </div>\n' + '  <div class="product-total-price">\n' + '    {{ cartItem.total | currency: "R$" }}\n' + '  </div>\n' + '</div>\n' + '\n' + '<div class="modal-body clearfix">\n' + '\n' + '  <aside class="pull-left">\n' + '    <img class="product-image img-thumbnail" ng-src="{{ product.img }}" width="280" height="280" alt="Foto do produto com nome {{ product.name }}">\n' + '    <p class="product-description">\n' + '      <i class="icon icon-shopping-cart"></i>\n' + '      {{ product.name }}\n' + '    </p>\n' + '    <p class="product-description" ng-show="product.description">\n' + '      <i class="icon icon-info-circle"></i>\n' + '      {{ product.description }}\n' + '    </p>\n' + '    <p class="product-description">\n' + '      <i class="icon icon-money"></i>\n' + '      A partir de {{ product.price | currency: "R$" }}\n' + '    </p>\n' + '  </aside>\n' + '\n' + '  <div class="product-options pull-right">\n' + '\n' + '    <label for="cart-item-amount">Selecione a quantidade:</label>\n' + '    <select id="cart-item-amount" ng-model="cartItem.amount" ng-options="i as i for i in [1,2,3,4,5,6,7,8,9,10]"></select>\n' + '\n' + '    <hr ng-show="product.addon_categories.length > 0">\n' + '\n' + '    <div ng-repeat="addonCategory in product.addon_categories" class="addon-categories-list">\n' + '\n' + '      <div class="addon-category-name">\n' + '        {{ addonCategory.name }}\n' + '        <small ng-show="addonCategory.max_itens > 0">\n' + '          Escolha até {{ addonCategory.max_itens }}\n' + '          <span ng-show="addonCategory.max_itens > 1">\n' + '            itens\n' + '          </span>\n' + '          <span ng-show="addonCategory.max_itens === 1">\n' + '            item\n' + '          </span>\n' + '        </small>\n' + '        <small ng-show="addonCategory.max_itens === 0">\n' + '          Escolha quantos itens você desejar\n' + '        </small>\n' + '      </div>\n' + '\n' + '      <div class="addons-list">\n' + '        <div ng-repeat="addon in addonCategory.addons" class="addon-item">\n' + '          <label ng-if="addonCategory.max_itens === 1" ng-disabled="!addon.available">\n' + '            <input type="radio" ng-disabled="!addon.available" ng-value="addon.id"  ng-model="cartItem.customization_fields[addonCategory.id]">\n' + '            {{ addon.name }}\n' + '            <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' + '            <span class="addon-unavailable" ng-show="!addon.available">Item não disponível</span>\n' + '          </label>\n' + '          <label ng-if="addonCategory.max_itens === 0" ng-disabled="!addon.available">\n' + '            <input type="checkbox" ng-disabled="!addon.available" ng-model="cartItem.customization_fields[addonCategory.id][addon.id]" ng-init="cartItem.customization_fields[addonCategory.id][addon.id] = cartItem.customization_fields[addonCategory.id][addon.id] && addon.available ? true : false" />\n' + '            {{ addon.name }}\n' + '            <span class="addon-price" ng-show="addon.price > 0 && addon.available">({{ addon.price | currency: "R$" }})</span>\n' + '            <span class="addon-unavailable" ng-show="!addon.available">Item não disponível</span>\n' + '          </label>\n' + '        </div>\n' + '      </div>\n' + '    </div>\n' + '\n' + '    <hr>\n' + '    <label for="cart-item-note">Deseja fazer alguma observação?</label>\n' + '    <textarea id="cart-item-note" rows="3" ng-model="cartItem.note"></textarea>\n' + '    <limit maxlength="150" model="cartItem.note"></limit>\n' + '  </div>\n' + '</div>\n' + '\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="!isEditing">\n' + '    <i class="icon icon-plus-square"></i>\n' + '    Adicionar\n' + '  </button>\n' + '  <button class="btn btn-success" ng-click="ctrl.add()" ng-show="isEditing">\n' + '    <i class="icon icon-pencil"></i>\n' + '    Confirmar edição\n' + '  </button>\n' + '  <button class="btn btn-default" ng-click="ctrl.close()">\n' + '    Cancelar\n' + '  </button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/modal-rating.html', '<div class="modal-header">\n' + '  <h4 class="modal-title">\n' + '    Avaliar pedido\n' + '  </h4>\n' + '</div>\n' + '<div class="modal-body">\n' + '  <p>1. Em uma escala de 1 a 10, sendo 1 altamente improvavel e 10 altamente provavel, qual a probabilidade de você indicar o speedy food a um amigo(a)?</p>\n' + '  <rating ng-model="rating.score" max="10" state-on="\'icon icon-star icon-star-filled\'" state-off="\'icon icon-star-o\'"></rating>\n' + '  <hr />\n' + '  <p>2. Qual a nota você daria para qualidade dos nossos produtos?</p>\n' + '  <rating ng-model="rating.quality" max="10" state-on="\'icon icon-star icon-star-filled\'" state-off="\'icon icon-star-o\'"></rating>\n' + '  <hr />\n' + '  <p>3. Qual a nota você daria para nosso serviço de entrega?</p>\n' + '  <rating ng-model="rating.delivery" max="10" state-on="\'icon icon-star icon-star-filled\'" state-off="\'icon icon-star-o\'"></rating>\n' + '  <hr /\n' + '  <p>4. Há algo que você não gostou que gostaria de registrar?</p>\n' + '  <textarea ng-model="rating.good_comment" rows="4" placeholder="Deixe em branco se você não tiver nenhum comentário"></textarea>\n' + '  <hr />\n' + '  <p>5. Há algo que você gostou que gostaria de registrar?</p>\n' + '  <textarea ng-model="rating.bad_comment" rows="4" placeholder="Deixe em branco se você não tiver nenhum comentário"></textarea>\n' + '  </div>\n' + '<div class="modal-footer">\n' + '  <button class="btn btn-success" ng-click="ctrl.save()">\n' + '    <i class="icon icon-pencil"></i>\n' + '    Confirmar edição\n' + '  </button>\n' + '  <button class="btn btn-default" ng-click="ctrl.close()">\n' + '    Cancelar\n' + '  </button>\n' + '</div>');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/no-results.html', '<div class="row no-results">\n' + '  <div ng-class="{ \'col-md-4\': icon, \'hide\': !icon }">\n' + '    <i class="icon icon-{{ icon }}"></i>\n' + '  </div>\n' + '  <div ng-class="{ \'col-md-8\': icon, \'col-md-12\': !icon }">\n' + '    <p>{{ text }}</p>\n' + '  </div>\n' + '</div>\n' + '');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/submit-form.html', '<div class="form-group form-submit">\n' + '  <div class="col-lg-offset-4 col-lg-8">\n' + '    <button type="submit" class="btn btn-success" tabindex="20">{{ text || "Salvar" }}</button>\n' + '    <div ng-transclude style="display: inline-block;"></div>\n' + '  </div>\n' + '</div>\n' + '\n' + '');
  }]);
})();
'use strict';

(function (module) {
  try {
    module = angular.module('foodbox.utils');
  } catch (e) {
    module = angular.module('foodbox.utils', []);
  }
  module.run(['$templateCache', function ($templateCache) {
    $templateCache.put('/templates/tik-tak.html', '<span>\n' + '  {{ value }}\n' + '</span>');
  }]);
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $modalInstance, addressResolved, onSubmitResolved) {

  return new ((function () {
    function ctrl() {
      _classCallCheck(this, ctrl);

      $scope.address = addressResolved;
      $scope.onSubmit = onSubmitResolved;
    }

    _createClass(ctrl, [{
      key: 'submit',
      value: function submit() {
        var method = this._getMethod();

        $scope.onSubmit({ address: $scope.address, method: method }).then(function (response) {
          $modalInstance.close({ address: response.data, method: method });
        });
      }
    }, {
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }, {
      key: '_getMethod',
      value: function _getMethod() {
        return $scope.address.id ? 'update' : 'create';
      }
    }]);

    return ctrl;
  })())();
};

ctrl.$inject = ['$scope', '$modalInstance', 'addressResolved', 'onSubmitResolved'];
angular.module('foodbox.utils').controller('ModalAddressCtrl', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $modalInstance, hint, pusher, chatMessageApi, chatResolved, userResolved, userTypeResolved) {

  return new ((function () {
    function ctrl() {
      _classCallCheck(this, ctrl);

      $scope.chat = chatResolved;
      $scope.userType = userTypeResolved;
      $scope.user = userResolved;
      $scope.message = {
        content: ''
      };

      pusher.subscribe('private-chat-' + $scope.chat.id).bind('message:created', function (response) {
        var message = response.data;

        if (message.user.id !== $scope.user.id && $scope.userType !== message.userable_type) {
          hint.success(message.content, { title: message.user.name + ' diz:' });
        }

        $scope.chat.messages.push(response.data);

        $scope.message = {
          content: ''
        };
      });
    }

    _createClass(ctrl, [{
      key: 'onKeyUp',
      value: function onKeyUp($event) {
        if ($event.keyCode == 13 && !$event.shiftKey) {
          $event.preventDefault();
          this.send();
          return false;
        }
      }
    }, {
      key: 'send',
      value: function send() {
        chatMessageApi.create($scope.chat, $scope.message).then(function () {});
      }
    }, {
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }]);

    return ctrl;
  })())();
};

ctrl.$inject = ['$scope', '$modalInstance', 'hint', 'pusher', 'chatMessageApi', 'chatResolved', 'userResolved', 'userTypeResolved'];
angular.module('foodbox.utils').controller('ModalChatCtrl', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $modalInstance, $timeout, Cropper, imgUrlResolved, fileResolved) {

  return new ((function () {
    function Ctrl() {
      var _this = this;

      _classCallCheck(this, Ctrl);

      $scope.imgToCrop = imgUrlResolved;

      this.fileData = null;
      this.file = fileResolved;

      $scope.options = {
        maximize: true,
        movable: false,
        rotatable: false,
        zoomable: false,
        mouseWheelZoom: false,
        touchDragZoom: false,
        aspectRatio: 2 / 2,
        crop: function crop(newData) {
          _this.fileData = newData;
        }
      };

      $scope.showEvent = 'show';

      $timeout(function () {
        return $scope.$broadcast($scope.showEvent);
      });
    }

    _createClass(Ctrl, [{
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }, {
      key: 'crop',
      value: function crop() {
        var _this2 = this;

        return Cropper.crop(this.file, this.fileData).then(function (blob) {
          blob.lastModifiedDate = new Date();
          blob.name = _this2.file.name;

          $timeout(function () {
            scope.model = [blob];
          });

          _this2.close();
        });
      }
    }]);

    return Ctrl;
  })())();
};

ctrl.$inject = ['$scope', '$modalInstance', '$timeout', 'Cropper', 'imgUrlResolved', 'fileResolved'];
angular.module('foodbox.utils').controller('ModalCropController', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $modalInstance, $filter) {

  return new ((function () {
    function ModalCustomPeriodCtrl() {
      _classCallCheck(this, ModalCustomPeriodCtrl);

      var date = $filter('date')(new Date(), "dd/MM/yyyy");

      $scope.period = { fromDate: date, toDate: date, fromTime: new Date().setHours(0, 0, 0, 0), toTime: new Date().setHours(23, 59, 59, 0) };
      $scope.status = { fromDate: false, toDate: false };
      $scope.options = { showWeeks: false };
    }

    // Abre o datepicker

    _createClass(ModalCustomPeriodCtrl, [{
      key: 'open',
      value: function open(name) {
        $scope.status[name] = !$scope.status[name];
      }

      // Fecha o modal e envia os dados selecionados
    }, {
      key: 'next',
      value: function next() {
        $modalInstance.close($scope.period);
      }

      // Fecha o modal sem enviar os dados selecionados
    }, {
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }]);

    return ModalCustomPeriodCtrl;
  })())();
};

ctrl.$inject = ['$scope', '$modalInstance', '$filter'];
angular.module('foodbox.utils').controller('ModalCustomPeriodCtrl', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $modalInstance, TempCart, meCartItemApi, cartResolved, storeProductResolved, cartItemResolved) {

  return new ((function () {
    function ModalProductCustomizationCtrl() {
      _classCallCheck(this, ModalProductCustomizationCtrl);

      $scope.product = storeProductResolved;
      $scope.cart = cartResolved;
      $scope.cartItem = cartItemResolved;

      new TempCart($scope, cartItemResolved);
    }

    _createClass(ModalProductCustomizationCtrl, [{
      key: 'add',
      value: function add() {
        meCartItemApi[this._getCartMethod()]($scope.cartItem, { cart_id: $scope.cart.id }).then(function (cart) {
          $modalInstance.close({ cart: cart.plain() });
        });
      }
    }, {
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }, {
      key: '_getCartMethod',
      value: function _getCartMethod() {
        return $scope.cartItem.id ? 'update' : 'create';
      }
    }]);

    return ModalProductCustomizationCtrl;
  })())();
};

ctrl.$inject = ['$scope', '$modalInstance', 'TempCart', 'meCartItemApi', 'cartResolved', 'storeProductResolved', 'cartItemResolved'];
angular.module('foodbox.utils').controller('ModalProductCtrl', ctrl);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ctrl = function ctrl($scope, $modalInstance) {

  return new ((function () {
    function ModalRatingCtrl() {
      _classCallCheck(this, ModalRatingCtrl);

      $scope.rating = {};
    }

    _createClass(ModalRatingCtrl, [{
      key: 'save',
      value: function save() {
        $modalInstance.close({ rating: rating.plain() });
      }
    }, {
      key: 'close',
      value: function close() {
        $modalInstance.dismiss('close');
      }
    }]);

    return ModalRatingCtrl;
  })())();
};

ctrl.$inject = ['$scope', '$modalInstance'];
angular.module('foodbox.utils').controller('ModalRatingCtrl', ctrl);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: $templateCache.get('/templates/box.html'),
    scope: {
      title: '@',
      icon: '@',
      containerClass: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('foodbox.utils').directive('box', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/delete-button.html'),
    scope: {
      'class': '@',
      icon: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('foodbox.utils').directive('deleteButton', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/edit-button.html'),
    scope: {
      'class': '@',
      icon: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('foodbox.utils').directive('editButton', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    require: '^form',
    transclude: true,
    replace: true,
    template: $templateCache.get('/templates/form-group.html'),
    priority: 10000,
    scope: {
      label: '@',
      vertical: '@'
    },
    link: function link(scope, $el, attrs) {
      scope.id = 'field-' + Math.floor(Math.random() * 50000 + 1);
      $el.find('input, textarea').attr('id', scope.id);
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module("foodbox.utils").directive('formGroup', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      $el.append('<input type="text" style="display:none" />').append('<input type="password" style="display:none" />');
    }
  };
};

angular.module('foodbox.utils').directive('form', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      var el = $el[0];

      if (el.type !== 'radio' && el.type !== 'checkbox') {
        el.classList.add('form-control');
      }
    }
  };
};

angular.module('foodbox.utils').directive('input', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('directives/limit.html'),
    replace: true,
    scope: {
      maxlength: '=',
      model: '='
    },
    link: function link(scope, $el, attrs) {
      scope.maxlength = parseInt(scope.maxlength, 10);

      if (_.isNaN(scope.maxlength) || !_.isNumber(scope.maxlength)) {
        throw new Error('Valor do atributo maxlength da directiva limit deve ser numeral.');
      }

      // Verifica se o elemento antes da directiva é um input
      var $textarea = $el.prev();
      var type = $textarea.get(0).type;

      if (type !== 'textarea') {
        throw new Error('Elemento antes da directiva limit deve ser um textarea');
      }

      // Adiciona atributo maxlength no HTML para previnir de usuário digitar um valor com mais de 300 carácteres
      $textarea.attr('maxlength', scope.maxlength);

      // Usamos o valor length para lidar com o tamanho de chars do textarea
      scope.length = 0;
      scope.$watch('model', function (message) {
        scope.length = message ? message.length : 0;
      });
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('foodbox.utils').directive('limit', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('/templates/map.html'),
    replace: true,
    scope: {
      latitude: '=',
      longitude: '=',
      scrollWheel: '=',
      zoom: '=',
      markers: '=',
      route: '=',
      disableButtons: '='
    },
    link: function link(scope, $el, attrs) {
      var markers = [];

      scope.$watch('[latitude, longitude, markers]', function () {
        scope.map ? reset() : initialize();
      }, true);

      var initialize = function initialize() {
        if (!scope.latitude || !scope.longitude) {
          return false;
        }

        scope.map = new GMaps({
          div: $el.get(0),
          lat: scope.latitude,
          lng: scope.longitude,
          zoom: scope.zoom || 15,
          scrollwheel: scope.scrollWheel || false,
          disableDefaultUI: scope.disableButtons || false
        });

        if (scope.markers) {
          addMarkers();
        }

        if (scope.route) {
          drawRoute();
        }
      };

      var addMarkers = function addMarkers() {
        for (var i in markers) {
          var marker = markers[i];
          marker.setMap(null);
        }

        markers = [];

        if (!angular.isArray(scope.markers)) {
          throw new Error('Markers must be an array');
        }

        var _loop = function (i) {
          var m = scope.markers[i];

          if (!m.latitude || !m.longitude) {
            throw new Error('Marker must have a latitude and longitude');
          }

          var marker = scope.map.addMarker({
            lat: m.latitude,
            lng: m.longitude,
            infoWindow: m.title ? { content: '<p>' + m.title + '</p>' } : null,
            draggable: angular.isFunction(m.onDrag) ? true : false
          });

          if (m.animate) {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }

          if (angular.isFunction(m.onDrag)) {
            google.maps.event.addListener(marker, 'dragend', function (event) {
              marker.onDrag({ latitude: event.latLng.lat(), longitude: event.latLng.lng() });
            });
          }

          markers.push(marker);
        };

        for (var i in scope.markers) {
          _loop(i);
        }
      };

      var drawRoute = function drawRoute() {
        if (!scope.route.destination || !scope.route.origin) {
          throw new Error('Route must have a destination and a origin');
        }

        scope.map.drawRoute({
          destination: [scope.route.destination.latitude, scope.route.destination.longitude],
          origin: [scope.route.origin.latitude, scope.route.origin.longitude],
          travelMode: 'driving',
          strokeColor: '#DD390D',
          strokeOpacity: 0.6,
          strokeWeight: 6
        });
      };

      var reset = function reset() {
        if (scope.markers) {
          addMarkers();
        }

        var position = new google.maps.LatLng(scope.latitude, scope.longitude);
        scope.map.panTo(position);
      };
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('foodbox.utils').directive('map', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'A',
    link: function link(scope, $el, attrs) {
      if (attrs.mask === 'phone') {
        return $el.inputmask('(99) 9999-9999[9]');
      }

      if (attrs.mask === 'date') {
        return $el.inputmask('99/99/9999');
      }

      if (attrs.mask === 'zipcode') {
        return $el.inputmask('99999-999', { autoUnmask: true });
      }

      $el.inputmask(attrs.mask, { autoUnmask: attrs.autoUnmask || false });
    }
  };
};

angular.module('foodbox.utils').directive('mask', directive);
'use strict';

var directive = function directive($modal, $templateCache, $parse, $timeout, Cropper) {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    scope: {
      model: '=ngModel'
    },
    link: function link(scope, $el, attrs, ngModel) {

      if ($el.get(0).type.toLowerCase() !== 'file') {
        return false;
      }

      $el.on('change', function (e) {
        var file = $el.get(0).files[0];
        var data = null;
        var blob = null;

        return Cropper.encode(blob = file).then(function (url) {
          return $modal.open({
            template: $templateCache.get('/templates/modal-crop.html'),
            windowClass: 'modal-crop',
            controller: 'ModalCropController as ctrl',
            resolve: {
              imgUrlResolved: function imgUrlResolved() {
                return url;
              },
              fileResolved: function fileResolved() {
                return file;
              }
            }
          });
        });
      });
    }
  };
};

directive.$inject = ['$modal', '$templateCache', '$parse', '$timeout', 'Cropper'];
angular.module("foodbox.utils").directive('modalCrop', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/no-results.html'),
    scope: {
      text: '@',
      icon: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('foodbox.utils').directive('noResults', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      $el[0].classList.add('form-control');
    }
  };
};

angular.module('foodbox.utils').directive('select', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function link(scope, $el, attrs, ngModel) {
      if ($el.get(0).type === 'number') {
        ngModel.$parsers.push(function (value) {
          if (value) return value.toString();
        });

        ngModel.$formatters.push(function (value) {
          if (value) return parseFloat(value, 10);
        });
      }
    }
  };
};

angular.module('foodbox.utils').directive('step', directive);
'use strict';

var directive = function directive($templateCache) {
  return {
    restrict: 'E',
    template: $templateCache.get('/templates/submit-form.html'),
    replace: true,
    transclude: true,
    require: '^form',
    scope: {
      text: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('foodbox.utils').directive('submitForm', directive);
"use strict";

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      $el.addClass("table table-hover table-striped").wrap("<div class='table-responsive'></div>");
    }
  };
};

angular.module('foodbox.utils').directive('table', directive);
'use strict';

var directive = function directive() {
  return {
    restrict: 'E',
    link: function link(scope, $el, attrs) {
      var el = $el[0];
      el.classList.add('form-control');
    }
  };
};

angular.module('foodbox.utils').directive('textarea', directive);
'use strict';

var directive = function directive($templateCache, $interval) {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/tik-tak.html'),
    scope: {
      interval: '@',
      value: '=',
      operator: '@'
    },
    link: function link(scope, $el, attrs) {
      var operator = scope.operator && (scope.operator == '+' || scope.operator == '-') ? scope.operator : '-';

      var operation = {
        '+': function _(a, b) {
          return parseFloat(a) + parseFloat(b);
        },
        '-': function _(a, b) {
          return parseFloat(a) - parseFloat(b);
        }
      };

      $interval(function () {
        scope.value = operation[operator](scope.value, 1);
      }, scope.interval);
    }
  };
};

directive.$inject = ['$templateCache', '$interval'];
angular.module('foodbox.utils').directive('tikTak', directive);
'use strict';

var directive = function directive(zipcodeApi) {
  return {
    restrict: 'A',
    scope: {
      zipcode: '&ngModel',
      model: '=zipcodeModel'
    },
    link: function link(scope, $el, attrs) {
      var _zipcode = null;

      scope.$watch(scope.zipcode, function (value, oldValue) {
        if (!value) return false;
        if (value.length !== 8) return false;
        if (value === oldValue) return false;
        if (_zipcode === value) return false;

        _zipcode = value;

        var number = scope.model.number ? scope.model.number : null;

        zipcodeApi.fetch({ zipcode: _zipcode, number: number }).then(function (response) {
          var data = response.data;

          scope.model.latitude = data.latitude;
          scope.model.longitude = data.longitude;
          scope.model.neighborhood = data.neighborhood;
          scope.model.city = data.city;
          scope.model.street = data.street;
          scope.model.city_id = data.city.id;
          scope.model.neighborhood_id = data.neighborhood.id;

          $el.parents('.form-group').siblings().find("input[ng-model='address.number']").focus();
        });
      });
    }
  };
};

directive.$inject = ['zipcodeApi'];
angular.module('foodbox.utils').directive('zipcode', directive);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HttpToken = function HttpToken($q, $state, $http, hint, storage) {

  return (function () {
    function HttpToken(userKey) {
      _classCallCheck(this, HttpToken);

      this._setUserKey(userKey);
      return this;
    }

    _createClass(HttpToken, [{
      key: 'initialize',
      value: function initialize() {
        var _this = this;

        return $q(function (resolve, reject) {
          return _this.get().then(function (user) {
            if (!user) return reject();

            _this.set(user).then(function (user) {
              resolve(user);
            });
          });
        });
      }
    }, {
      key: 'get',
      value: function get() {
        return storage.get('current' + this.key).then(function (currentUser) {
          return currentUser;
        });
      }
    }, {
      key: 'set',
      value: function set(user) {
        var _this2 = this;

        return $q(function (resolve, reject) {
          $http.defaults.headers.common['X-' + _this2.key + '-Email'] = user.email;
          $http.defaults.headers.common['X-' + _this2.key + '-Token'] = user.authentication_token;

          storage.set('current' + _this2.key, user);

          resolve(_this2.get());
        });
      }
    }, {
      key: 'remove',
      value: function remove() {
        var _this3 = this;

        return $q(function (resolve, reject) {
          return storage.remove('current' + _this3.key).then(function () {
            delete $http.defaults.headers.common['X-' + _this3.key + '-Email'];
            delete $http.defaults.headers.common['X-' + _this3.key + '-Token'];
            resolve();
          });
        });
      }
    }, {
      key: '_setUserKey',
      value: function _setUserKey() {
        var key = arguments.length <= 0 || arguments[0] === undefined ? 'Employee' : arguments[0];

        if (key !== 'Employee' && key !== 'Costumer') {
          throw new Error('Chave para uso do serviço HttpToken deve ter os valores Employee ou Costumer');
        }
        this.key = key;
      }
    }]);

    return HttpToken;
  })();
};

HttpToken.$inject = ['$q', '$state', '$http', 'hint', 'storage'];
angular.module('foodbox.utils').factory('HttpToken', HttpToken);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var factory = function factory($rootScope, $state, hint) {

  return (function () {
    function RequestError() {
      var _this = this;

      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, RequestError);

      if (params.onError && angular.isFunction(params.onError)) {
        this.onError = params.onError;
      }

      $rootScope.$on('request:error', function ($event, data) {
        _this._onError(data);
      });
    }

    // Exibe mensagem
    // @param {Object} data com descrição do erro

    _createClass(RequestError, [{
      key: '_onError',
      value: function _onError(data) {
        if (typeof data === 'undefined') {
          return false;
        }

        if (data.code === 0) {
          data = { code: 408, description: 'Não foi possível conectar com o servidor. Tente mais tarde. ' };
        }

        if (angular.isArray(data.description)) {
          angular.forEach(data.description, function (message) {
            hint.error(data.description);
          });
        } else {
          hint.error(data.description);
        }

        if (this.onError) {
          this.onError(data);
        }
      }
    }]);

    return RequestError;
  })();
};

factory.$inject = ['$rootScope', '$state', 'hint'];
angular.module('foodbox.utils').factory('RequestError', factory);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var hint = function hint($timeout, $window, ngAudio) {

  return new ((function () {
    function Hint() {
      _classCallCheck(this, Hint);

      this.assetsPath = 'https://s3-sa-east-1.amazonaws.com/speedy-development';

      this.notifications = [];
      this.timeout = 5000;
      this.notification = $window.Notification || $window.mozNotification || $window.webkitNotification;

      this.sound = {
        success: ngAudio.load(this.assetsPath + '/notifications/audios/success_notification.mp3'),
        info: ngAudio.load(this.assetsPath + '/notifications/audios/success_notification.mp3'),
        error: ngAudio.load(this.assetsPath + '/notifications/audios/error_notification.mp3')
      };

      if (!this.notification) {
        return false;
      }

      this.notification.requestPermission();
    }

    _createClass(Hint, [{
      key: 'success',
      value: function success(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this._notify('success', 'Sucesso :)', message, options);
      }
    }, {
      key: 'error',
      value: function error(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this._notify('error', 'Ops...', message, options);
      }
    }, {
      key: 'info',
      value: function info(message) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        this._notify('info', 'Atenção', message, options);
      }
    }, {
      key: '_notify',
      value: function _notify(type, title, message, options) {
        var _this = this;

        if (options.title) {
          title = options.title;
        }

        if (!options.timeout) {
          options.timeout = this.timeout;
        }

        if (!options.autoClose) {
          options.autoClose = true;
        }

        if (this.notification.permission === 'granted') {

          var settings = {
            body: message,
            icon: this.assetsPath + '/notifications/icons/' + type + '.png'
          };

          // Só adiciona um hint se não houver nenhum hint com o mesmo conteudi
          if (!this._hasMessage(settings.body)) {
            var _notification = new this.notification(title, settings);
            this.notifications.push(_notification);

            if (options.autoClose) {
              $timeout(function () {

                // Acha posicão da notificação no array
                var index = _this.notifications.indexOf(_notification);
                _notification = _this.notifications[index];

                // Força fechamento
                _notification.close();

                // Remove do array
                _this.notifications.splice(index, 1);
              }, options.timeout);
            }
          }
        }

        this.sound[type].play();
      }
    }, {
      key: '_hasMessage',
      value: function _hasMessage(message) {
        var hasMessage = false;

        angular.forEach(this.notifications, function (notification) {
          if (notification.body === message) {
            hasMessage = true;
          }
        });

        return hasMessage;
      }
    }, {
      key: '_randonNumber',
      value: function _randonNumber() {
        return Math.floor(Math.random() * (99999999 - 1 + 1)) + 1;
      }
    }]);

    return Hint;
  })())();
};

hint.$inject = ['$timeout', '$window', 'ngAudio'];
angular.module('foodbox.utils').factory('hint', hint);
'use strict';

var httpConfig = function httpConfig($httpProvider) {
  return $httpProvider.interceptors.push("httpHintInterceptor");
};

var httpHintInterceptor = function httpHintInterceptor($q, $window, $rootScope) {
  return {
    request: function request(config) {
      config.timeout = 12000;
      $rootScope.$emit('request:start');
      return config || $q.when(config);
    },
    response: function response(_response) {
      $rootScope.$emit('request:end');
      return _response || $q.when(_response);
    },
    responseError: function responseError(response) {
      $rootScope.$emit('request:end', {
        error: true
      });
      $rootScope.$emit('request:error', response.data.error);
      return $q.reject(response);
    }
  };
};

httpConfig.$inject = ['$httpProvider'];
httpHintInterceptor.$inject = ['$q', '$window', '$rootScope'];

angular.module("foodbox.utils").config(httpConfig).factory("httpHintInterceptor", httpHintInterceptor);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalAddress = function modalAddress($modal, $templateCache) {

  return new ((function () {
    function ModalAddress() {
      _classCallCheck(this, ModalAddress);
    }

    _createClass(ModalAddress, [{
      key: 'open',
      value: function open() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        if (!angular.isObject(params)) {
          throw new Error('Modal Address params must be an object!');
        }

        if (!params.onSubmit || !angular.isFunction(params.onSubmit)) {
          throw new Error('Modal Address Factory must have onSubmit function!');
        }

        return $modal.open({
          template: $templateCache.get('/templates/modal-address.html'),
          controller: 'ModalAddressCtrl as ctrl',
          windowClass: 'modal-address',
          resolve: {
            addressResolved: function addressResolved() {
              return params.address;
            },
            onSubmitResolved: function onSubmitResolved() {
              return params.onSubmit;
            }
          }
        });
      }
    }]);

    return ModalAddress;
  })())();
};

modalAddress.$inject = ['$modal', '$templateCache'];
angular.module('foodbox.utils').factory('modalAddress', modalAddress);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modal = function modal($modal, $templateCache) {
  return new ((function () {
    function Modal() {
      _classCallCheck(this, Modal);
    }

    _createClass(Modal, [{
      key: 'open',
      value: function open() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return $modal.open({
          template: $templateCache.get('/templates/modal-chat.html'),
          controller: 'ModalChatCtrl as ctrl',
          windowClass: 'modal-chat',
          resolve: {
            chatResolved: function chatResolved() {
              return params.chat;
            },
            userResolved: function userResolved() {
              return params.user;
            },
            userTypeResolved: function userTypeResolved() {
              var userType = params.userType;

              if (userType !== 'Costumer' && userType !== 'Employee') {
                userType = 'Costumer';
              }

              return userType;
            }
          }
        });
      }
    }]);

    return Modal;
  })())();
};

modal.$inject = ['$modal', '$templateCache'];
angular.module('foodbox.utils').factory('modalChat', modal);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalCustomPeriod = function modalCustomPeriod($modal, $templateCache) {
  return new ((function () {
    function ModalCustomPeriod() {
      _classCallCheck(this, ModalCustomPeriod);
    }

    _createClass(ModalCustomPeriod, [{
      key: 'open',
      value: function open() {
        return $modal.open({
          template: $templateCache.get('/templates/modal-custom-period.html'),
          controller: 'ModalCustomPeriodCtrl as ctrl',
          windowClass: 'modal-custom-period'
        });
      }
    }]);

    return ModalCustomPeriod;
  })())();
};

modalCustomPeriod.$inject = ['$modal', '$templateCache'];
angular.module('foodbox.utils').factory('modalCustomPeriod', modalCustomPeriod);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalDestroyer = function modalDestroyer() {
  return new ((function () {
    function ModalDestroyer() {
      _classCallCheck(this, ModalDestroyer);
    }

    _createClass(ModalDestroyer, [{
      key: 'destroyAll',
      value: function destroyAll() {
        $('.modal, .modal-backdrop').remove();
      }
    }]);

    return ModalDestroyer;
  })())();
};

angular.module('foodbox.utils').factory('modalDestroyer', modalDestroyer);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalProduct = function modalProduct($modal, storeProductApi, $templateCache) {
  return new ((function () {
    function ModalProduct() {
      _classCallCheck(this, ModalProduct);
    }

    _createClass(ModalProduct, [{
      key: 'open',
      value: function open(params) {

        if (!params.cart) {
          throw new Error('Modal Product service must have a cart');
        }

        if (!params.product) {
          throw new Error('Modal Product service must have a product');
        }

        if (!params.cartItem) {
          params.cartItem = false;
        }

        return $modal.open({
          template: $templateCache.get('/templates/modal-product.html'),
          controller: 'ModalProductCtrl as ctrl',
          windowClass: 'modal-product',
          resolve: {
            cartResolved: function cartResolved() {
              return params.cart;
            },
            storeProductResolved: function storeProductResolved() {
              return storeProductApi.show(params.product).then(function (response) {
                return response.data;
              });
            },
            cartItemResolved: function cartItemResolved() {
              return params.cartItem;
            }
          }
        });
      }
    }]);

    return ModalProduct;
  })())();
};

modalProduct.$inject = ['$modal', 'storeProductApi', '$templateCache'];
angular.module('foodbox.utils').factory('modalProduct', modalProduct);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var modalRating = function modalRating($modal, $templateCache) {
  return new ((function () {
    function ModalRating() {
      _classCallCheck(this, ModalRating);
    }

    _createClass(ModalRating, [{
      key: 'open',
      value: function open(order) {
        return $modal.open({
          template: $templateCache.get('/templates/modal-rating.html'),
          controller: 'ModalRatingCtrl as ctrl',
          windowClass: 'modal-rating',
          resolve: {
            orderResolvedd: function orderResolvedd() {
              return order;
            }
          }
        });
      }
    }]);

    return ModalRating;
  })())();
};

modalRating.$inject = ['$modal', '$templateCache'];
angular.module('foodbox.utils').factory('modalRating', modalRating);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var popup = function popup($window, $q) {
  return new ((function () {
    function Popup() {
      _classCallCheck(this, Popup);
    }

    _createClass(Popup, [{
      key: 'open',
      value: function open(pageURL, width, height) {
        return $q(function (resolve, reject) {
          var left = Number(screen.width / 2 - width / 2);
          var top = Number(screen.height / 2 - height / 2);

          var popup = $window.open(pageURL, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
          resolve(popup);
        });
      }
    }]);

    return Popup;
  })())();
};

popup.$inject = ['$window', '$q'];
angular.module('foodbox.utils').factory('popup', popup);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var roleVerificator = function roleVerificator() {
  return new ((function () {
    function RoleVerificator() {
      _classCallCheck(this, RoleVerificator);
    }

    _createClass(RoleVerificator, [{
      key: 'hasRole',
      value: function hasRole(roleToVerify, availableRoles) {
        var found = false;

        angular.forEach(availableRoles, function (roleAlias) {
          if (roleAlias === roleToVerify.alias) {
            found = true;
          }
        });

        return found;
      }
    }]);

    return RoleVerificator;
  })())();
};

angular.module('foodbox.utils').factory('roleVerificator', roleVerificator);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var scrollTop = function scrollTop() {
  return new ((function () {
    function ScrollTop() {
      _classCallCheck(this, ScrollTop);
    }

    _createClass(ScrollTop, [{
      key: 'goTop',
      value: function goTop() {
        var delay = arguments.length <= 0 || arguments[0] === undefined ? 500 : arguments[0];

        var position = 0;
        $('html, body').animate({ scrollTop: position }, delay);
      }
    }]);

    return ScrollTop;
  })())();
};

angular.module('foodbox.utils').factory('scrollTop', scrollTop);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var storage = function storage($localStorage, $q) {
  return new ((function () {
    function Storage() {
      _classCallCheck(this, Storage);
    }

    _createClass(Storage, [{
      key: 'get',
      value: function get(key) {
        return $q(function (resolve, reject) {
          var response = $localStorage[key] || null;
          resolve(response);
        });
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        return $q(function (resolve, reject) {
          $localStorage[key] = value;
          resolve();
        });
      }
    }, {
      key: 'remove',
      value: function remove(key) {
        return $q(function (resolve, reject) {
          delete $localStorage[key];
          var response = $localStorage[key] || null;
          resolve(response);
        });
      }
    }]);

    return Storage;
  })())();
};

storage.$inject = ['$localStorage', '$q'];
angular.module('foodbox.utils').factory('storage', storage);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var tempCart = function tempCart() {
  return (function () {
    function TempCart($scope, cartItem) {
      _classCallCheck(this, TempCart);

      this.$scope = $scope;
      $scope.isEditing = cartItem ? true : false;

      if ($scope.isEditing) {
        cartItem.customization_fields = JSON.parse(cartItem.customization_fields);
      }

      $scope.cartItem = cartItem || { amount: 1, note: null, total: $scope.product.price * 1, product: $scope.product, customization_fields: {}, addons: [] };

      this._setCustomizationFields();
      this._listenScopeEvents();
    }

    _createClass(TempCart, [{
      key: '_setCustomizationFields',
      value: function _setCustomizationFields() {
        var _this = this;

        if (this.$scope.isEditing) {
          return false;
        }

        angular.forEach(this.$scope.product.addon_categories, function (addonCategory) {
          _this.$scope.cartItem.customization_fields[addonCategory.id] = {};

          angular.forEach(addonCategory.addons, function (addon) {
            if (addonCategory.max_itens === 1) {
              _this.$scope.cartItem.customization_fields[addonCategory.id] = addonCategory.addons[0].id;
            } else {
              var fill = addonCategory.auto_fill && !parseFloat(addon.price) && addon.available ? true : false;
              _this.$scope.cartItem.customization_fields[addonCategory.id][addon.id] = fill;
            }
          });
        });
      }
    }, {
      key: '_listenScopeEvents',
      value: function _listenScopeEvents() {
        var _this2 = this;

        var findAndInsert = function findAndInsert(addonId) {
          var _addon = null;

          angular.forEach(_this2.$scope.product.addon_categories, function (addonCategory) {
            var find = _.findWhere(addonCategory.addons, { id: parseInt(addonId, 10) });
            if (find) {
              _addon = find;
            }
          });

          if (!_addon) {
            return false;
          }

          _this2.$scope.cartItem.addons.push({
            id: _addon.id,
            name: _addon.name,
            price: _addon.price,
            product_addon_id: _addon.product_addon_id
          });
        };

        this.$scope.$watch('cartItem', function (newObject, oldObject) {
          _this2.$scope.cartItem.addons = [];

          angular.forEach(_this2.$scope.cartItem.customization_fields, function (addon) {
            if (!_.isObject(addon)) {
              return findAndInsert(addon);
            }

            angular.forEach(addon, function (checked, addonId) {
              if (!checked) {
                return false;
              }

              return findAndInsert(addonId);
            });
          });
        }, true);

        this.$scope.$watch('cartItem', function (newValue, oldValue) {
          var addonsPrice = 0;

          angular.forEach(_this2.$scope.cartItem.addons, function (addon) {
            addonsPrice += parseFloat(addon.price);
          });

          _this2.$scope.cartItem.total = (parseFloat(_this2.$scope.product.price) + addonsPrice) * _this2.$scope.cartItem.amount;
        }, true);
      }
    }]);

    return TempCart;
  })();
};

angular.module('foodbox.utils').factory('TempCart', tempCart);
'use strict';

var pusher = function pusher() {
  var _settings = {
    key: null,
    authTransport: 'ajax',
    baseUrl: 'http://foodio.com.br/admin'
  };

  var self = this;

  self.setKey = function (value) {
    _settings.key = value;
  };

  self.setBaseUrl = function (value) {
    _settings.baseUrl = value;
  };

  self.setAuthTransport = function (authTransport) {
    if (authTransport !== 'ajax' && authTransport !== 'jsonp') {
      authTransport = 'ajax';
    }

    _settings.authTransport = authTransport;
  };

  self.$get = ["$localStorage", "$rootScope", function ($localStorage, $rootScope) {
    return {
      subscribe: function subscribe(channel) {
        if (!_settings.key) {
          throw new Error('A key must be setted to initialize pusher');
        }

        var costumer = $localStorage['currentCostumer'];
        var employee = $localStorage['currentEmployee'];

        var headers = {
          'X-Employee-Email': employee ? employee.email : null,
          'X-Employee-Token': employee ? employee.authentication_token : null,
          'X-Costumer-Email': costumer ? costumer.email : null,
          'X-Costumer-Token': costumer ? costumer.authentication_token : null
        };

        var pusher = new Pusher(_settings.key, { authEndpoint: _settings.baseUrl + '/companies/' + $rootScope.company.id + '/me/pusher/authentication', auth: { headers: headers }, authTransport: _settings.authTransport });
        return pusher.subscribe(channel);
      }
    };
  }];
};

angular.module('foodbox.utils').provider('pusher', pusher);