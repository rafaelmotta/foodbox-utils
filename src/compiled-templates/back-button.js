(function(module) {
try {
  module = angular.module('foodbox.utils');
} catch (e) {
  module = angular.module('foodbox.utils', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/back-button.html',
    '<a href="javascript:history.back()" class="btn btn-default">Voltar</a>');
}]);
})();
