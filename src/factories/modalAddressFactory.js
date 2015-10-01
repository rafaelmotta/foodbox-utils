let modalAddress = ($modal, $templateCache) => {
  return new class ModalAddress {
    open(address = {}, onSubmit = null){
      return $modal.open({
        template: $templateCache.get('/templates/modal-address.html'),
        controllerAs: 'ctrl',
        controller: ($scope, $modalInstance, addressResolved) => {
          return new class ModalMeAddressCtrl {
            constructor(onSubmit) {
              $scope.address = addressResolved;
            }

            submit() {
              let method = this._getMethod();
              onSubmit({ address: $scope.address, method: method }).then((response) => {
                $modalInstance.close(response);
              });
            }

            close() {
              $modalInstance.dismiss('close');
            }

             _getMethod() {
              return $scope.address.id ? 'update' : 'create';
            }
          };
        },
        windowClass: 'modal-address',
        resolve: {
          addressResolved: () => {
            return address;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('modalAddress', modalAddress);