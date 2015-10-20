let httpConfig = ($httpProvider) => {
  return $httpProvider.interceptors.push("httpHintInterceptor");
};


let httpHintInterceptor = ($q, $window, $rootScope) => {
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
};

httpConfig.$inject = ['$httpProvider'];
httpHintInterceptor.$inject = ['$q', '$window', '$rootScope'];

angular.module("foodbox.utils").config(httpConfig).factory("httpHintInterceptor", httpHintInterceptor);