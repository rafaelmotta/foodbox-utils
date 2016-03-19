let directive = ($rootScope, $templateCache, printManager) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/print-button.html'),
    scope: {
      layout: '@',
      printData: '=',
      printDataKey: '@'
    },
    link: (scope, el, attrs) => {
      el.on('click', (e) => {
        let data = {}
        data[scope.printDataKey] = scope.printData;
        printManager.print({ layout: scope.layout, data: data });
      });
    }
  };
};

directive.$inject = ['$rootScope', '$templateCache', 'printManager'];
angular.module('utils.foodio').directive('printButton', directive);