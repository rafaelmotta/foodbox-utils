let scrollTop = () => {
  return new class ScrollTop {
    goTop(delay = 500) {
      let position = 0;
      $('html, body').animate({ scrollTop: position }, delay);
    }

    goTo(elementId, delay) {
      let position = $(elementId).offset().top
      $('html, body').animate({ scrollTop: position }, delay);
    }
  };
};

angular.module('utils.foodio').factory('scrollTop', scrollTop);
