(function(module) {
try {
  module = angular.module('foodbox.utils');
} catch (e) {
  module = angular.module('foodbox.utils', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/delete-button.html',
    '<button class="{{ class || \'btn btn-default btn-xs\' }}">\n' +
    '  <i class="icon icon-{{ icon || \'trash-o\' }}"></icon>\n' +
    '</button>');
}]);
})();
