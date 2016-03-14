let PrinterManager = (hint) => {

  return class PrinterManager {
    constructor(options = {}) {

      if(options.autoConnect) {
        this.connect();
      } else {
        this.socket = {
          disconnected: true, connected: false
        };
      }

      return this;
    }

    // @name print
    // @description Realiza impressão utilizando socket.io
    // @params {Object} options - Layout, impressora e dados opcionais para impressão
    print(options) {
      return new Promise((resolve, reject) => {

        // Evita de tentar imprimir se o programa de impressão não estiver
        if(this.socket.disconnected) {
          let exception = "O programa de impressão não encontra-se ativo. Instale-o e inicie para prosseguir!";
          hint.error(exception);

          reject(exception);
        }

        return resolve(this.socket.emit('print', { layout: options.layout, printer: options.printer, data: options.data || null }));
      });
    }

    // @name _connect
    // @description Conecta com o socket
    connect(options = {}) {
      this.socket = io(options.address || 'http://localhost:7333');

      // Adiciona evento de erro
      this.socket.on('print:error', (data) => {
        hint[data.type](data.description);
      });

      return this.socket;
    }
  };
};

PrinterManager.$inject = ['hint'];
angular.module('utils.foodio').factory('PrinterManager', PrinterManager);