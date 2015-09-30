let modal = ($modal, $templateCache) => {
  return new class Modal {
    open(params = {}){
      return $modal.open({
        template: $templateCache.get('/templates/modal-chat.html'),
        controller: 'ModalChatCtrl as ctrl',
        windowClass: 'modal-chat',
        resolve: {
          chatResolved: () => {
            return params.chat;
          },
          userResolved: () => {
            return params.user;
          },
          userTypeResolved: () => {
            let userType = params.userType;

            if(userType !== 'Costumer' && userType !== 'Employee') {
              userType = 'Costumer';
            }

            return userType;
          }
        }
      });
    }
  };
};

angular.module('foodbox.utils').factory('modalChat', modal);