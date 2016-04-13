let RestangularInterceptors = (Restangular, $rootScope) => {
  return new class RestangularInterceptors {
    constructor() {
      Restangular.addRequestInterceptor((element) => {
        $rootScope.$emit('request:start');

        $('.with-loader').removeClass('hide');
        $rootScope.withLoader = { inAction: true };

        return element;
      });

      Restangular.addResponseInterceptor((data) => {
        $rootScope.$emit('request:end');

        $('.with-loader').addClass('on-request');
        $rootScope.withLoader = { inAction: false };


        return data;
      });
    }
  }
};

RestangularInterceptors.$inject = ['Restangular', '$rootScope'];
angular.module('utils.foodio').factory('RestangularInterceptors', RestangularInterceptors);

