(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-chat.html',
    '<div class="modal-header">\n' +
    '  <button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-click="ctrl.close()"><span aria-hidden="true">&times;</span></button>\n' +
    '  <h4 class="modal-title">Mensagens ({{ chat.messages.length }})</h4>\n' +
    '</div>\n' +
    '<div class="modal-body">\n' +
    '  <ul class="list-unstyled">\n' +
    '    <li ng-repeat="m in chat.messages | orderBy: \'-id\'">\n' +
    '      <div class="row">\n' +
    '        <div class="col-md-2">\n' +
    '          <img ng-src="{{ m.user.photo }}" alt="Avatar" class="img-thumbnail" width="100" height="100"/>\n' +
    '        </div>\n' +
    '        <div class="col-md-10">\n' +
    '          <div class="message-user">\n' +
    '            <span ng-show="m.user.id === user.id && m.userable_type === userType">Você</span>\n' +
    '            <span ng-show="m.user.id !== user.id && m.userable_type === userType">{{ m.user.name }}</span>\n' +
    '            <span ng-show="m.userable_type === \'Costumer\'">{{ m.user.name }}</span>\n' +
    '            <small>{{ m.created_at }}</small>\n' +
    '          </div>\n' +
    '          <p>{{ m.content }}</p>\n' +
    '        </div>\n' +
    '      </div>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '  <form ng-submit="ctrl.send()" name="form">\n' +
    '    <div class="row">\n' +
    '      <div class="col-md-10">\n' +
    '        <textarea rows="4" ng-model="message.content" placeholder="Digite sua mensagem" autofocus required ng-maxlength="500" ng-keyup="ctrl.onKeyUp($event)"></textarea>\n' +
    '      </div>\n' +
    '      <div class="col-md-2">\n' +
    '        <button class="btn btn-success btn-block" ng-disabled="message.content.length < 1">\n' +
    '          Enviar\n' +
    '        </button>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </form>\n' +
    '</div>');
}]);
})();
