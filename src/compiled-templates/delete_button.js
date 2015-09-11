(function(module) {
try {
  module = angular.module('foodbox.utils');
} catch (e) {
  module = angular.module('foodbox.utils', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/delete_button.html',
    '<button class="{{ class || \'btn btn-default btn-xs\' }}" type="button">\n' +
    '  <i class="icon icon-{{ icon || \'trash-o\' }}"></i>\n' +
    '</button>\n' +
    '\n' +
    '\n' +
    '');
}]);
})();
