let hint = (toaster, $timeout, $window, ngAudio) => {

  return new class Hint {
    constructor() {
      this.notifications = {};
      this.timeout = 5000;
      this.notification = window.Notification || window.mozNotification || window.webkitNotification;

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

      if(this.notification === 'granted') {
        let settings = {
          body: message,
          icon: `/assets/app/icon-${type}.png`
        };

        let n = new this.notification(title, settings);

        if(options.autoClose) {
          let number = this._randonNumber();
          this.notifications[number] = n;

          $timeout(() => {
            delete this.notifications[number];
            n.close();
          }, options.timeout);
        }
      }

      this.sound[type].play();
    }

    _randonNumber() {
      return Math.floor(Math.random() * (99999999 - 1 + 1)) + 1;
    }
  };
};

angular.module('foodbox.utils').factory('hint', hint);