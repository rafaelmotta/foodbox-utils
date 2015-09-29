let directive = ($modal, $templateCache, $parse, $timeout, Cropper) => {
  return {
    restrict: 'A',
    scope: false,
    require: 'ngModel',
    scope: {
      model: '=ngModel'
    },
    link: (scope, $el, attrs, ngModel) => {

      if ($el.get(0).type.toLowerCase() !== 'file') {
        return false;
      }

      return $el.on('change', function(e) {
        var blob, data, file;
        file = $el.get(0).files[0];
        data = null;
        return Cropper.encode((blob = file)).then((function(_this) {
          return function(url) {
            return $modal.open({
              template: $templateCache.get('/templates/modal-crop.html'),
              windowClass: 'modal-crop',
              controller: ($scope, $modalInstance, $timeout) => {
                $scope.imgToCrop = url;
                $scope.options = {
                  maximize: true,
                  movable: false,
                  rotatable: false,
                  zoomable: false,
                  mouseWheelZoom: false,
                  touchDragZoom: false,
                  aspectRatio: 2 / 2,
                  crop: function(newData) {
                    return data = newData;
                  }
                };
                $scope.showEvent = 'show';
                $timeout((function(_this) {
                  return function() {
                    return $scope.$broadcast($scope.showEvent);
                  };
                })(this));
                $scope.close = function() {
                  return $modalInstance.dismiss('close');
                };
                return $scope.crop = function() {
                  return Cropper.crop(file, data).then(function(blob) {
                    blob.lastModifiedDate = new Date();
                    blob.name = file.name;
                    $timeout((function(_this) {
                      return function() {
                        return scope.model = [blob];
                      };
                    })(this));
                    return $scope.close();
                  });
                };
              }
            });
          };
        })(this));
      });
    }
  };
};

angular.module("foodbox.utils").directive('modalCrop', directive);