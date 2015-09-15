let modalMeAddressCtrl = ($scope, $modalInstance, meAddressApi, addressResolved) => {

  return new class ModalMeAddressCtrl {

    constructor(onSubmit) {
      $scope.address = addressesResolved;
    }

    submit() {
      let method = this._getMethod();

      meAddressApi[method]($scope.address).then((address) => {
        hint.success(method === 'update' ? 'Endereço editado' : 'Endereço adicionado');
        $modalInstance.close({ address: address});
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
