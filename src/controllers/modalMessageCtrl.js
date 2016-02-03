let ctrl = ($scope, $modalInstance, ngAudio, constants, dataResolved) => {

  return new class Ctrl {
    constructor() {
      $scope.title = dataResolved.title || 'Atenção';
      $scope.message = dataResolved.content || '';

      ngAudio.load(`${constants.static}/notifications/audios/success.mp3`).play();
    }

    close() {
      $modalInstance.dismiss('close');
    }
  }
};

ctrl.$inject = ['$scope', '$modalInstance', 'ngAudio', 'constants', 'dataResolved'];
angular.module('utils.foodio').controller('ModalMessageCtrl', ctrl);