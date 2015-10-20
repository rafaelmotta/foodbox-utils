let modalAddress = ($modal, $templateCache) => {

  return new class ModalAddress {

    open(params = {}){
      if(!angular.isObject(params)) {
        throw new Error('Modal Address params must be an object!');
      }

      if(!params.onSubmit || !angular.isFunction(params.onSubmit)) {
        throw new Error('Modal Address Factory must have onSubmit function!')
      }

      return $modal.open({
        template: $templateCache.get('/templates/modal-address.html'),
        controller: 'ModalAddressCtrl as ctrl',
        windowClass: 'modal-address',
        resolve: {
          addressResolved() {
            return params.address;
          },
          onSubmitResolved() {
            return params.onSubmit;
          }
        }
      });
    }
  };
};

modalAddress.$inject = ['$modal', '$templateCache'];
angular.module('foodbox.utils').factory('modalAddress', modalAddress);