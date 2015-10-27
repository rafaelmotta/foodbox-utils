let ctrl = ($scope, $modalInstance, $timeout, imgUrlResolved) => {

  return new class Ctrl {

    constructor() {
      $scope.imgToCrop = imgUrlResolved;
      this.fileData = null;

      $scope.options = {
        maximize: true,
        movable: false,
        rotatable: false,
        zoomable: false,
        mouseWheelZoom: false,
        touchDragZoom: false,
        aspectRatio: 2 / 2,
        crop: (newData) => {
          this.fileData = newData;
        }
      };

      $scope.showEvent = 'show';

      $timeout(() => {
        return $scope.$broadcast($scope.showEvent);
      });
    }

    close() {
      $modalInstance.dismiss('close');
    }

    crop() {
      return Cropper.crop(file, this.fileData).then((blob) => {
        blob.lastModifiedDate = new Date();
        blob.name = file.name;

        $timeout(() => {
          scope.model = [blob];
        });

        $scope.close();
      });
    }
  }
};

ctrl.$inject = ['$scope', '$modalInstance', '$timeout', 'imgUrlResolved'];
angular.module('foodbox.utils').controller('ModalCropController', ctrl);