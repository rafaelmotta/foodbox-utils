let pusher = () => {
  let settings = {
    key: null,
    authEndpoint: '/pusher/auth',
    authTransport: 'ajax'
  };

  return {
    setKey: (key) => {
      settings[key] = key;
    },

    setAuthEndpoint: (authEndpoint) => {
      settings.authEndpoint = authEndpoint;
    },

    setAuthTransport: (authTransport) => {
      if(authTransport !== 'ajax' && authTransport !== 'jsonp') {
        authTransport = 'ajax';
      }

      settings.authTransport = authTransport;
    },

    $get: () => {
      return {
        subscribe: (channel) => {
          if(!settings.key) {
            throw new Error('A key must be setted to initialize pusher');
          }

          let pusher = new Pusher(settings.key, { authEndpoint: settings.authEndpoint });
          pusher.subscribe(channel);
        }
      }
    }
  };
};

angular.module('foodbox.utils').provider('pusher', pusher);