let StoreCallbacks = () => {
  return class StoreCallbacks {
    constructor(store) {
      if(store) this.setStore(store);
      return this;
    }

    setStore(store) {
      this.store = store;
    }

    getDiffFromNow(reference) {
      moment(reference).diff(moment(), 'seconds');
    }

    toOpen() {
      $q((resolve, reject) => {
        if(!this.store.opening_time) {
          return reject();
        }

        resolve({ event: 'toOpen', seconds: getDiffFromNow(this.store.opening_time) })
      });
    }

    toClose() {
      $q((resolve, reject) => {
        if(!this.store.closing_time) {
          return reject();
        }

        resolve({ event: 'toClose', seconds: getDiffFromNow(this.store.closing_time) })
      });
    }

  };
};

StoreCallbacks.$inject = ['$modal', '$templateCache'];
angular.module('utils.foodio').factory('StoreCallbacks', StoreCallbacks);