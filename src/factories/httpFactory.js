let RestangularInterceptors = (Restangular, $rootScope) => {
  return new class RestangularInterceptors {
    constructor() {
      Restangular.addRequestInterceptor((element) => {
        $rootScope.$emit('request:start');
        $('.with-loader').addClass('on-request');
        return element;
      });

      Restangular.addResponseInterceptor((data) => {
        $rootScope.$emit('request:end');
        $('.with-loader').removeClass('on-request');
        return data;
      });
    }
  }
};

RestangularInterceptors.$inject = ['Restangular', '$rootScope'];
angular.module('utils.foodio').factory('RestangularInterceptors', RestangularInterceptors);

