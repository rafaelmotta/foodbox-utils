(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/printer-button.html',
    '<button ng-disabled="$root.socket.disconnected">\n' +
    '  <i class="fa fa-{{ icon }}"></i>\n' +
    '</button>');
}]);
})();
