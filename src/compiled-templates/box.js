(function(module) {
try {
  module = angular.module('foodbox.utils.templates');
} catch (e) {
  module = angular.module('foodbox.utils.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/partials/box.html',
    '<div class="box-container">\n' +
    '  <div class="box-header" ng-hide="hideHeader">\n' +
    '    <h2>\n' +
    '      <i class="icon icon-{{ icon }}"></i>\n' +
    '      {{ title }}\n' +
    '    </h2>\n' +
    '  </div>\n' +
    '  <div ng-transclude class="box-content {{ sizeClass }} {{ hideHeader ? \'box-hide-header\' : \'\' }}">\n' +
    '  </div>\n' +
    '</div>');
}]);
})();
