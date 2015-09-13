let HttpToken = ($q, $state, $http, hint, storage) => {

  return class HttpToken {

    constructor(userKey) {
      this._setUserKey(userKey);
      return this;
    }

    get() {
      return storage.get(`current${this.key}`).then((currentUser) => {
        return currentUser;
      });
    }

    set(user) {
      return $q((resolve, reject) => {
        $http.defaults.headers.common[`X-{this.key}-Email`] = user.email;
        $http.defaults.headers.common[`X-{this.key}-Token`] = user.authentication_token;

        storage.set(`current${this.key}`, user);

        resolve(this.get());
      });
    }

    remove() {
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
        throw new Error('Chave para uso do serviço HttpToken deve ter os valores Employee ou Costumer');
      }
      this.key = key;
    }
  }

};

angular.module('foodbox.utils').factory('HttpToken', HttpToken);