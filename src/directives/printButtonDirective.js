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

      });
    }
  };
};

directive.$inject = ['$rootScope', '$templateCache', 'printerManager'];
angular.module('utils.foodio').directive('printButton', directive);