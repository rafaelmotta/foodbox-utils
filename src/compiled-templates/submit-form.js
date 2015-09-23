(function(module) {
try {
  module = angular.module('foodbox.utils');
} catch (e) {
  module = angular.module('foodbox.utils', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/submit-form.html',
    '<div class="form-group form-submit">\n' +
    '  <div class="col-lg-offset-3 col-lg-9">\n' +
    '    <button type="submit" class="btn btn-success" tabindex="20">{{ text || "Salvar" }}</button>\n' +
    '    <div ng-transclude style="display: inline-block;"></div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);
})();
