let factory = ($rootScope, $state, hint) => {

  return class RequestError {

    constructor(params = {}) {
      if(params.onError && angular.isFunction(params.onCode)) {
        this.onError = params.onError
      }

      $rootScope.$on('request:error', ($event, data) => { this.onError(data); });
    }

    // Exibe mensagem
    // @param {Object} data com descrição do erro
    onError(data) {
      if(typeof data === 'undefined') {
        return false;
      }

      if(data.code === 0) {
        data = { code: 408, description: 'Não foi possível conectar com o servidor. Tente mais tarde. '}
      }

      if(this.onError) {
        this.onError(data.code);
      }

      if(angular.isArray(data.description)) {
        angular.forEach(data.description, (message) => {
          hint.error(data.description);
        });
      } else {
        hint.error(data.description);
      }
    }
  }
};

angular.module('foodbox.utils').factory('requestError', factory);