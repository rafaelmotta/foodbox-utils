(function(module) {
try {
  module = angular.module('foodbox.utils');
} catch (e) {
  module = angular.module('foodbox.utils', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/no-results.html',
    '<div class="row table-empty">\n' +
    '  <div class="col-md-3">\n' +
    '    <i class="icon icon-{{ icon }}"></i>\n' +
    '  </div>\n' +
    '  <div class="col-md-9">\n' +
    '    <p>{{ text }}</p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
