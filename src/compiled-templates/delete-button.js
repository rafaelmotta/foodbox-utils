(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/delete-button.html',
    '<button class="{{ class || \'btn btn-default btn-xs\' }}">\n' +
    '  <i class="icon icon-{{ icon || \'trash-o\' }}"></icon>\n' +
    '</button>');
}]);
})();
