let directive = ($templateCache) => {
  return {
    restrict: 'E',
    require: '^form',
    transclude: true,
    replace: true,
    template: $templateCache.get('/templates/form-group.html'),
    priority: 10000,
    scope: {
      label: '@',
      vertical: '@'
    },
    link: (scope, $el, attrs) => {
      scope.id = `field-${Math.floor((Math.random() * 50000) + 1)}`;
    }
  };
};

angular.module("foodbox.utils").directive('formGroup', directive);