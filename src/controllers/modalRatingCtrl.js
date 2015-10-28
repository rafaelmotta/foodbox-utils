let ctrl = ($scope, $modalInstance) => {

  return new class ModalRatingCtrl {
    constructor() {
      $scope.rating = {};
    }

    save() {
      $modalInstance.close({ rating: rating.plain() });
    }

    close() {
      $modalInstance.dismiss('close');
    }

  };
};

ctrl.$inject = ['$scope', '$modalInstance'];
angular.module('utils.foodio').controller('ModalRatingCtrl', ctrl);