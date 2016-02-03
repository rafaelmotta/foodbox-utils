let modal = ($modal, $templateCache) => {
  return new class Modal {
    open(params = {}){
      return $modal.open({
        template: $templateCache.get('/templates/modal-message.html'),
        controller: 'ModalMessageCtrl as ctrl',
        windowClass: 'modal-message',
        resolve: {
          dataResolved: () => {
            return params;
          }
        }
      });
    }
  };
};

modal.$inject = ['$modal', '$templateCache'];
angular.module('utils.foodio').factory('modalMessage', modal);