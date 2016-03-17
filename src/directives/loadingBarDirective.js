let directive = ($rootScope, $templateCache, RestangularInterceptors) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/loading-bar.html'),
    link: () => {
      $rootScope.$on('request:start', () => {
        $('.loading-bar').show();
      });

      $rootScope.$on('request:end', () => {
        $('.loading-bar').hide();
      });
    }
  };
};

directive.$inject = ['$rootScope', '$templateCache', 'RestangularInterceptors'];
angular.module('utils.foodio').directive('loadingBar', directive);