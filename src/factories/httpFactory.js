angular.module("foodbox.utils").config(function($httpProvider) {
  return $httpProvider.interceptors.push("httpHintInterceptor");

}).factory("httpHintInterceptor", function($q, $window, $rootScope) {
  return {
    request: function(config) {
      config.timeout = 12000;
      $rootScope.$emit('request:start');
      return config || $q.when(config);
    },
    response: function(response) {
      $rootScope.$emit('request:end');
      return response || $q.when(response);
    },
    responseError: function(response) {
      $rootScope.$emit('request:end', {
        error: true
      });
      $rootScope.$emit('request:error', response.data.error);
      return $q.reject(response);
    }
  };
});