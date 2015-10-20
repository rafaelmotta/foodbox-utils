let directive = ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/no-results.html'),
    scope: {
      text: '@',
      icon: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('foodbox.utils').directive('noResults', directive);