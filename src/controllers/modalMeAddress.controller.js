let modalMeAddressCtrl = ($scope, $modalInstance, meAddressApi, addressResolved) => {

  return new class ModalMeAddressCtrl {

    constructor(onSubmit) {
      $scope.address = addressResolved;
    }

    submit() {
      let method = this._getMethod();

      meAddressApi[method]($scope.address).then((address) => {
        $modalInstance.close({ address: address.plain(), method: method });
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

angular.module('foodbox.utils').controller('ModalMeAddressCtrl', modalMeAddressCtrl);
