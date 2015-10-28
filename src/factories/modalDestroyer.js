let modalDestroyer = () => {
  return new class ModalDestroyer {
    destroyAll() {
      $('.modal, .modal-backdrop').remove();
    }
  };
};

angular.module('utils.foodio').factory('modalDestroyer', modalDestroyer);