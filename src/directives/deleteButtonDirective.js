let directive = ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/delete-button.html'),
    scope: {
      class: '@',
      icon: '@'
    }
  };
};

angular.module('foodbox.utils').directive('deleteButton', directive);