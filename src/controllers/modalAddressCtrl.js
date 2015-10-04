let ctrl = ($scope, $modalInstance, addressResolved, onSubmitResolved) => {

  return new class ctrl {

    constructor() {
      $scope.address = addressResolved;
      $scope.onSubmit = onSubmitResolved;
    }

    submit() {
      let method = this._getMethod();

      $scope.onSubmit({ address: $scope.address, method: method }).then((response) => {
        $modalInstance.close({ address: response.data, method: method });
      });
    }

    close() {
      $modalInstance.dismiss('close');
    }

     _getMethod() {
      return $scope.address.id ? 'update' : 'create';
    }
  };
};

angular.module('foodbox.utils').controller('ModalAddressCtrl', ctrl);
