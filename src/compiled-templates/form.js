(function(module) {
try {
  module = angular.module('foodbox.utils.templates');
} catch (e) {
  module = angular.module('foodbox.utils.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/form.html',
    '<div class="form-group" >\n' +
    '  <div ng-if="!vertical">\n' +
    '    <label for="{{ id }}" class="col-sm-3 control-label">{{ label }}\n' +
    '      <span ng-show="required" tooltip="Campo obrigatório" class="required-marker">*</span>\n' +
    '    </label>\n' +
    '    <div class="col-sm-4" ng-transclude></div>\n' +
    '  </div>\n' +
    '  <div ng-if="vertical">\n' +
    '    <label for="{{ id }}" class="control-label">{{ label }}</label>\n' +
    '    <div ng-transclude></div>\n' +
    '  </div>\n' +
    '</div>');
}]);
})();
