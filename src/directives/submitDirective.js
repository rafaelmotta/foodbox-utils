let directive = ($templateCache) => {
  return {
    restrict: 'E',
    template: $templateCache.get('/templates/submit-form.html'),
    replace: true,
    transclude: true,
    require: '^form',
    scope: {
      text: '@'
    }
  };
};

angular.module('foodbox.utils').directive('submitForm', directive);