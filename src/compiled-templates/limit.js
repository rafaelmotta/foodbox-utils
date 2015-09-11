(function(module) {
try {
  module = angular.module('foodbox.utils.templates');
} catch (e) {
  module = angular.module('foodbox.utils.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/limit.html',
    '<p class="help-block">Restando <strong>{{ maxlength - length }}</strong> caracteres</p>');
}]);
})();
