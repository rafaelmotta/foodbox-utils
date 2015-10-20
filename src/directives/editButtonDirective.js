let directive = ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/edit-button.html'),
    scope: {
      class: '@',
      icon: '@'
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('foodbox.utils').directive('editButton', directive);