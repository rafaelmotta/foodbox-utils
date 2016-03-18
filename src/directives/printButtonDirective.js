let directive = ($rootScope, $templateCache, printerManager) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/print-button.html'),
    scope: {
      layout: '@',
      data: '=',
      dataKey: '@'
    },
    link: (scope, el, attrs) => {
      el.on('click', (e) => {
        e.stopPropagation();

        let printer = {
          ip: '192.168.0.51',
          port: 9100
        };

        let data = {
          company: $rootScope.company,
          store: $rootScope.currentStore
        };

        data[scope.dataKey] = scope.data;

        $rootScope.printerManager.print({
          layout: scope.layout,
          printer: printer,
          data: data
        });
      });
    }
  };
};

directive.$inject = ['$rootScope', '$templateCache', 'printerManager'];
angular.module('utils.foodio').directive('printButton', directive);