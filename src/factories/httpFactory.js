let RestangularInterceptors = (Restangular, $rootScope) => {
  return new class RestangularInterceptors {
    constructor() {
      Restangular.addRequestInterceptor((element) => {
        $rootScope.$emit('request:start');
        return element;
      });

      Restangular.addResponseInterceptor((data) => {
        $rootScope.$emit('request:end');
        return data;
      });
    }
  }
};

RestangularInterceptors.$inject = ['Restangular', '$rootScope'];
angular.module('utils.foodio').factory('RestangularInterceptors', RestangularInterceptors);

