let modalMeAddressCtrl = ($scope, $modalInstance, meAddressApi, addressResolved) => {

  return new class ModalMeAddressCtrl {
    constructor(onSubmit) {
      $scope.address = addressResolved;
    }

    submit() {
      let method = this._getMethod();

      meAddressApi[method]($scope.address).then((address) => {
        let responseAddress = method === 'update' ? $scope.address : address.plain().data;
        $modalInstance.close({ address: responseAddress, method: method });
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
