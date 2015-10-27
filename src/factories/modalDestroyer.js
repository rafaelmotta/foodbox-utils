let modalDestroyer = () => {
  return new class ModalDestroyer {
    destroyAll() {
      $('.modal, .modal-backdrop').remove();
    }
  };
};

angular.module('foodbox.utils').factory('modalDestroyer', modalDestroyer);