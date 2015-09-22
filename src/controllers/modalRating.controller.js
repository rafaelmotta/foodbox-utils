let modalRatingCtrl = ($scope, $modalInstance) => {

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

angular.module('foodbox.utils').controller('ModalRatingCtrl', modalRatingCtrl);
