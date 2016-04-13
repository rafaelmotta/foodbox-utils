let directive = ($compile) => {
  return {
    restrict: 'A',
    link: (scope, $el, attrs) => {
      $el.attr('ng-disabled', 'withLoader.inAction');
      $el.append('<i class="fa fa-circle-o-notch fa-spin with-loader hide"></i>');

      $compile($el(scope));
    }
  };
};

directive.$inject = ['$compile'];
angular.module('utils.foodio').directive('loadingSpinner', directive);