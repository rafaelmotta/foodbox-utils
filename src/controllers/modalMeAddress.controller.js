let modalMeAddressCtrl = ($scope, $modalInstance, hint, meAddressApi, addressResolved) => {

  return new class ModalMeAddressCtrl {

    constructor(onSubmit) {
      $scope.address = addressResolved;
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
