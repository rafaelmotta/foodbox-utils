let ctrl = ($scope, $modalInstance, pusher, chatMessageApi, chatResolved, userResolved, userTypeResolved) => {

  return new class ctrl {

    constructor() {
      $scope.chat = chatResolved;
      $scope.userType = userTypeResolved;
      $scope.user = userResolved;
      $scope.message = {
        content: ''
      };

      pusher.subscribe(`private-chat-${$scope.chat.id}`).bind('message:create', (response) => {
        $scope.chat.messages.push(response.data);
      });
    }

    send() {
      chatMessageApi.create($scope.chat, $scope.message).then(() => {
        $scope.message = {
          content: ''
        };
      });
    }

    close() {
      $modalInstance.dismiss('close');
    }
  };
};

angular.module('foodbox.utils').controller('ModalChatCtrl', ctrl);
