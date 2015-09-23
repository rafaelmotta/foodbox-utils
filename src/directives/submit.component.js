let directive = ($templateCache) => {
  return {
    restrict: 'E',
    template: $templateCache.get('directives/submit-form.html'),
    replace: true,
    transclude: true,
    require: '^form',
    scope: {
      text: '@'
    }
  };
};

angular.module('foodbox.utils').directive('submitForm', directive);