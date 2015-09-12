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
          let n = new this.notification(title, settings);
          this.notifications.push(n);

          if(options.autoClose) {
            $timeout(() => {

              // Acha posicão da notificação no array
              let index = this.notifications.indexOf(n);

              // Pega notificação
              let n = this.notifications[index];

              // Força fechamento
              n.close();

              // Remove do array
              this.notifications.splice(index, 1);
            }, options.timeout);
          }
        }
      }

      this.sound[type].play();
    }

    _hasMessage(message) {
      for(n of this.notifications) {
        if(message === n.body) {
          break;
          return false;
        }
      }
      return true;
    }

    _randonNumber() {
      return Math.floor(Math.random() * (99999999 - 1 + 1)) + 1;
    }
  };
};

angular.module('foodbox.utils').factory('hint', hint);