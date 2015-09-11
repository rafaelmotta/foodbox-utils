(function(module) {
try {
  module = angular.module('foodbox.utils.templates');
} catch (e) {
  module = angular.module('foodbox.utils.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/edit_button.html',
    '<button class="btn btn-warning btn-xs" type="button">\n' +
    '  <i class="icon icon-{{ icon || \'pencil\' }}"></i>\n' +
    '</button>');
}]);
})();
