let modalMeAddressCtrl = ($scope, $modalInstance, addressResolved) => {

  return new class ModalMeAddressCtrl {
    constructor(onSubmit) {
      $scope.address = addressResolved;
    }

    submit() {
      let method = this._getMethod();
      $modalInstance.close({ address: $scope.address, method: method });
    }

    close() {
      $modalInstance.dismiss('close');
    }

     _getMethod() {
      return $scope.address.id ? 'update' : 'create';
    }
  };
};

angular.module('foodbox.utils').controller('ModalAddressCtrl', modalMeAddressCtrl);
