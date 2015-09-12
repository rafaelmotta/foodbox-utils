let Authentication = ($q, $state, $http, hint, storage) => {

  return class Authentication {

    stateToGo: 'dashboard.sales'

    constructor(userKey) {
      this._setUserKey(userKey);
    }

    get() {
      return storage.get(`current${this.key}`).then((currentUser) => {
        return currentUser;
      });
    }

    login(params = {}) {
      return $q((resolve, reject) => {
        $http.defaults.headers.common[`X-{this.key}-Email`] = params.currentEmployee.email;
        $http.defaults.headers.common[`X-{this.key}-Token`] = params.currentEmployee.authentication_token;

        storage.set(`current${this.key}`, params.user);

        resolve(this.get());
      });

      // if(!params['current${this.key}') {
      //   params.currentEmployee = null;
      // }

      // if(!params.stateToGo) {
      //   params.stateToGo = this.stateToGo;
      // }

      // if(!params.currentEmployee.email || !params.currentEmployee.authentication_token || !params.currentEmployee.id) {
      //   return storage.remove('currentEmployee');
      // }

      //$scope.currentEmployee = params.currentEmployee;
      //$rootScope.currentStore = $scope.currentEmployee.current_store;

      // if(params.stateToGo) {
      //   return $state.go(params.stateToGo);
      // }
    }

    logout() {
      return $q((resolve, reject) => {
        storage.remove(`current${this.key}`).then(() => {
          delete $http.defaults.headers.common[`X-${this.key}-Email`];
          delete $http.defaults.headers.common[`X-${this.key}-Token`];
          resolve();
        });
      });
    }

    _setUserKey(key = 'Employee') {
      if(key !== 'Employee' && key !== 'Costumer') {
        throw new Error('Chave para uso do service de autenticação deve ter os valores employee ou costumer');
      }
      this.key = key;
    }
  }

};

angular.module('foodbox.utils').factory('Authentication', Authentication);