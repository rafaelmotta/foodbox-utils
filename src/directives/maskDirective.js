let directive = () => {
  return {
    restrict: 'A',
    link: (scope, $el, attrs) => {
      if(attrs.mask === 'phone') {
        return $el.inputmask("(99) 9999-9999[9]");
      } else {
        if(attrs.mask === 'date') {
          return $el.inputmask("99/99/9999");
        }
      }
      $el.inputmask(attrs.mask, { autoUnmask: attrs.autoUnmask || false })
    }
  };
};

angular.module('foodbox.utils').directive('mask', directive);