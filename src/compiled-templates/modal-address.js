(function(module) {
try {
  module = angular.module('foodbox.utils');
} catch (e) {
  module = angular.module('foodbox.utils', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/modal-address.html',
    '<h2>lorem</h2>\n' +
    '<h2>lorem</h2>\n' +
    '<h2>lorem</h2>');
}]);
})();
