let directive = ($rootScope, $templateCache, printManager) => {

  console.log($templateCache.get('/templates/print-button.html'));

  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/print-button.html'),
    scope: {
      icon: '@',
      layout: '@',
      printData: '=',
      printDataKey: '@'
    },
    link: (scope, el, attrs) => {
      el.on('click', (e) => {
        e.stopPropagation();

        let data = {}
        data[scope.printDataKey] = scope.printData;
        printManager.print({ layout: scope.layout, data: data });
      });
    }
  };
};

directive.$inject = ['$rootScope', '$templateCache', 'printManager'];
angular.module('utils.foodio').directive('printButton', directive);