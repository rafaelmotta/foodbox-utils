(function(module) {
try {
  module = angular.module('foodbox.utils');
} catch (e) {
  module = angular.module('foodbox.utils', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/tik-tak.html',
    '<span>\n' +
    '  {{ value }}\n' +
    '</span>');
}]);
})();
