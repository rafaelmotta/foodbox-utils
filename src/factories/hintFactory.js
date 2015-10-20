let hint = ($timeout, $window, ngAudio) => {

  return new class Hint {

    constructor() {
      this.notifications = [];
      this.timeout = 5000;
      this.notification = $window.Notification || $window.mozNotification || $window.webkitNotification

      this.sound = {
        success: ngAudio.load('/audios/success_notification.mp3'),
        info:    ngAudio.load('/audios/success_notification.mp3'),
        error:   ngAudio.load('/audios/error_notification.mp3')
      };

      if(!this.notification) {
        return false;
      }

      this.notification.requestPermission();
    }

    success(message, options = {}) {
      this._notify('success', 'Sucesso :)', message, options);
    }

    error(message, options = {}) {
      this._notify('error', 'Ops...', message, options);
    }

    info(message, options = {}) {
      this._notify('info', 'Atenção', message, options);
    }

    _notify(type, title, message, options) {
      if(options.title) {
        title = options.title;
      }

      if(!options.timeout) {
        options.timeout = this.timeout;
      }

      if(!options.autoClose) {
        options.autoClose = true;
      }

      if(this.notification.permission === 'granted') {

        let settings = {
          body: message,
          icon: `/assets/app/icon-${type}.png`
        };

        // Só adiciona um hint se não houver nenhum hint com o mesmo conteudi
        if(!this._hasMessage(settings.body)) {
          var _notification = new this.notification(title, settings);
          this.notifications.push(_notification);

          if(options.autoClose) {
            $timeout(() => {

              // Acha posicão da notificação no array
              let index = this.notifications.indexOf(_notification);
              _notification = this.notifications[index];

              // Força fechamento
              _notification.close();

              // Remove do array
              this.notifications.splice(index, 1);
            }, options.timeout);
          }
        }
      }

      this.sound[type].play();
    }

    _hasMessage(message) {
      let hasMessage = false;

      angular.forEach(this.notifications, (notification) => {
        if(notification.body === message) {
          hasMessage = true;
        }
      });

      return hasMessage;
    }

    _randonNumber() {
      return Math.floor(Math.random() * (99999999 - 1 + 1)) + 1;
    }
  };
};

hint.$inject = ['$timeout', '$window', 'ngAudio'];
angular.module('foodbox.utils').factory('hint', hint);