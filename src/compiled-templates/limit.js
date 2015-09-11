(function(module) {
try {
  module = angular.module('foodbox.utils');
} catch (e) {
  module = angular.module('foodbox.utils', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/limit.html',
    '<p class="help-block">Restando <strong>{{ maxlength - length }}</strong> caracteres</p>');
}]);
})();
