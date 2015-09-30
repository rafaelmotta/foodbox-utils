let ctrl = ($scope, $modalInstance, hint, pusher, chatMessageApi, chatResolved, userResolved, userTypeResolved) => {

  return new class ctrl {

    constructor() {
      $scope.chat = chatResolved;
      $scope.userType = userTypeResolved;
      $scope.user = userResolved;
      $scope.message = {
        content: ''
      };

      pusher.subscribe(`private-chat-${$scope.chat.id}`).bind('message:created', (response) => {
        let message = response.data;

        if(message.user.id !== $scope.user.id && $scope.userType !== message.userable_type) {
          hint.success(message.content, { title: `${message.user.name} diz:`});
        }

        $scope.chat.messages.push(response.data);

        $scope.message = {
          content: ''
        };
      });
    }

    onKeyUp($event) {
      if($event.keyCode == 13 && !$event.shiftKey) {
        $event.preventDefault();
        return this.send();
      }
    }

    send() {
      chatMessageApi.create($scope.chat, $scope.message).then(() => {});
    }

    close() {
      $modalInstance.dismiss('close');
    }
  };
};

angular.module('foodbox.utils').controller('ModalChatCtrl', ctrl);
