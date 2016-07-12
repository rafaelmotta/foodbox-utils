let directive = ($templateCache) => {
  return {
    restrict: 'E',
    replace: true,
    template: $templateCache.get('/templates/coupon.html'),
    scope: {
      options: '='
    }
  };
};

directive.$inject = ['$templateCache'];
angular.module('utils.foodio').directive('coupon', directive);
