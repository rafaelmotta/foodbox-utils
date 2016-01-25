(function(module) {
try {
  module = angular.module('utils.foodio');
} catch (e) {
  module = angular.module('utils.foodio', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/templates/no-results.html',
    '<div class="row no-results">\n' +
    '  <div ng-class="{ \'col-md-4\': fa, \'hide\': !fa }">\n' +
    '    <i class="fa fa-{{ fa }}"></i>\n' +
    '  </div>\n' +
    '  <div ng-class="{ \'col-md-8\': fa, \'col-md-12\': !fa }">\n' +
    '    <p>{{ text }}</p>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();
