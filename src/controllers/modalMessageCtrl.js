let ctrl = ($scope, $uibModalInstance, ngAudio, constants, messageResolved) => {

  return new class Ctrl {
    constructor() {
      $scope.message = {
        title: messageResolved.title || 'Atenção',
        content: messageResolved.content || '',
      };

      ngAudio.load(`${constants.static}/notifications/audios/success.mp3`).play();
    }

    close() {
      $uibModalInstance.dismiss('close');
    }
  }
};

ctrl.$inject = ['$scope', '$uibModalInstance', 'ngAudio', 'constants', 'messageResolved'];
angular.module('utils.foodio').controller('ModalMessageCtrl', ctrl);