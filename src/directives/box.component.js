let directive = () => {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: $templateCache.get('/templates/box.html'),
    scope: {
      title: '@',
      icon: '@',
      containerClass: '@'
    }
  };
};

angular.module('foodbox.utils').directive('box', directive);