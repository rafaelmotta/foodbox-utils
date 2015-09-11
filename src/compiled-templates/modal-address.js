(function(module) {
try {
  module = angular.module('foodbox.utils.templates');
} catch (e) {
  module = angular.module('foodbox.utils.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/modal-address.html',
    '<h2>lorem</h2>\n' +
    '<h2>lorem</h2>\n' +
    '<h2>lorem</h2>');
}]);
})();
