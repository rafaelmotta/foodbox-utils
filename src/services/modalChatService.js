let modal = ($modal, $templateCache) => {
  return new class Modal {
    open(params = {}){
      return $modal.open({
        template: $templateCache.get('/templates/modal-chat.html'),
        controller: 'ModalChatCtrl as ctrl',
        windowClass: 'modal-chat',
        size: 'lg',
        resolve: {
          chatResolved: () => {
            return params.chat;
          },
          userResolved: () => {
            return params.user;
          },
          userTypeResolved: () => {
            let userType = params.userType;

            if(userType !== 'costumer' && userType !== 'employee') {
              userType = 'costumer';
            }

            return userType;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('modalChat', modal);