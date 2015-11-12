let ctrl = ($scope, $modalInstance, hint, pusher, chatMessageApi, chatResolved, userResolved, userTypeResolved) => {

  return new class ctrl {

    constructor() {
      $scope.chat = chatResolved;
      $scope.userType = userTypeResolved;
      $scope.user = userResolved;

      $scope.message = {
        content: '',
        sending: false
      };

      pusher.subscribe(`private-chat-${$scope.chat.id}`).bind('message:created', (response) => {
        let message = response.data;

        // Só ouve se mensagem for criada por outra pessoa
        if(message.user.id === $scope.user.id && $scope.userType === message.userable_type) {
          return false;
        }

        $scope.chat.messages.push(response.data);
        hint.success(message.content, { title: `${message.user.name} diz:`});
      });
    }

    // Envia mensagem
    onKeyUp($event) {
      if($event.keyCode == 13 && !$event.shiftKey) {
        $event.preventDefault();
        return this.send();
      }
    }

    send() {
      // Notifica view que mensagem está sendo enviada
      $scope.message.sending = true;

      // Grava referencia de variável para posteriormente editar a mensagem enviada, com
      // dados do horário que foi criado, por exemplo
      let index = $scope.chat.messages.length;

      // Adiciona mensagem no scope
      // Fica com status 'enviando' até ser confirmado o envio
      $scope.chat.messages.push({
        content: $scope.message.content,
        user: $scope.user
      });

      chatMessageApi.create($scope.chat, $scope.message).then(() => {

        // Altera scope
        $scope.chat.messages[index] = response.data;
        this._resetMessage();
      }, () => {

        // Houve erro no envio
      });
    }

    close() {
      $modalInstance.dismiss('close');
    }

    _resetMessage() {
      $scope.message = {
        content: '',
        sending: false
      };
    }
  };
};

ctrl.$inject = ['$scope', '$modalInstance', 'hint', 'pusher', 'chatMessageApi', 'chatResolved', 'userResolved', 'userTypeResolved'];
angular.module('utils.foodio').controller('ModalChatCtrl', ctrl);
