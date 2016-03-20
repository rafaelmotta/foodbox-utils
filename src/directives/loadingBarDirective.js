let directive = ($rootScope, $templateCache, RestangularInterceptors) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/loading-bar.html'),
    link: () => {
      let $bar = $('.loading-bar');

      $rootScope.$on('request:start', () => {
        $bar.show();
      });

      $rootScope.$on('request:end', () => {
        $bar.hide();
      });

      $rootScope.$watch('socket', function(socket){
        if(socket) {
          socket.on('print:start', function(){
            $bar.show();
          });

          socket.on('print:end', function(){
            $bar.hide();
          });

          socket.on('print:error', function(){
            $bar.hide();
          });
        }
      });
    }
  };
};

directive.$inject = ['$rootScope', '$templateCache', 'RestangularInterceptors'];
angular.module('utils.foodio').directive('loadingBar', directive);