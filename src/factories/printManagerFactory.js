let printManager = ($rootScope, hint, printerApi, $uibModal, $templateCache) => {

  let socket = null;
  let printers = [];

  return {

    // @name connect
    // @description Conecta com o socket
    connect(options = {}) {

      // Seta impressoras
      if(options.printers && options.printers.length) {
        printers = options.printers;
      }

      return new Promise((resolve, reject) => {

        // Previne de criar se já está criado
        if(socket) {
          return resolve(socket);
        }

        let address = options.port ? `http://localhost:${options.port}` : 'http://localhost:7333';
        socket = io(address);

        // Adiciona evento de erro
        socket.on('print:error', (data) => {
          hint[data.type](data.description);
        });

        return resolve(socket);
      });
    },

    // @name disconnect
    // @description Desconecta socket
    disconnect() {
      return new Promise((resove, reject) => {
        resolve(socket = null);
      });
    },

    // @name print
    // @description Realiza impressão utilizando socket.io
    // @params {Object} options - Layout, impressora e dados opcionais para impressão
    print(options) {
      return new Promise((resolve, reject) => {
        return this._prepareToPrint(options).then((printer) => {

          let data = options.data || {};
          data.company = $rootScope.company;
          data.store = $rootScope.currentStore;

          return resolve(socket.emit('print', { layout: options.layout, printer: printer, data: data}));
        });
      });
    },

    // @name _prepareToPrint
    // @description Valida dados e escolhe impressora
    // @params {Object} options - Layout, impressora e dados opcionais para impressão
    _prepareToPrint(options) {
      return new Promise((resolve, reject) => {

        // Evita de tentar imprimir se o programa de impressão não estiver
        if(!socket || socket.disconnected) {
          return this._throwError(reject, "O programa de impressão não encontra-se ativo. Instale-o e inicie para prosseguir!");
        }

        // Não há impressora cadastrada
        if(!printers.length) {
          return this._throwError(reject, "Você não possui nenhuma impressora cadastrada. Cadastre uma para prosseguir!");
        }

        // Só há uma impressora, dessa forma usa ela
        if(printers.length === 1) {
          return resolve(printers[0]);
        }

        // Exibe modal para escolher impressora
        if(printers.length > 1) {
          this.openModal().result.then((result) => {
            return resolve(result.printer);
          });
        }
      });
    },

    // @name openModal
    // @description Abre modal
    openModal() {
      let modal = $uibModal.open({
        template: $templateCache.get('/templates/modal-print-manager.html'),
        controller: 'ModalPrintManagerController as ctrl',
        windowClass: 'modal-printer',
        resolve: {
          printersResolved() {
            return printers;
          },
          printerChooseResolved() {
            return true;
          }
        }
      });

      return modal;
    },

    // @name _throwError
    // @description Exibe erro e rejeita prommessa
    // @param {Fn} reject - Reject promise
    // @param {String} errorMsg - Mensagem de erro
    _throwError(reject, errorMsg) {
      hint.error(errorMsg);
      reject(errorMsg);
    },

    // @name _fetchPrinters
    // @description Busca impressoras
    _fetchPrinters() {
      return printerApi.fetch();
    },

    // @name _resetSocket
    // @description Realiza impressão utilizando socket.io
    _resetSocket() {
      return socket = {
        disconnected: true,
        connected: false
      };
    }
  }
};

printManager.$inject = ['$rootScope', 'hint', 'printerApi', '$uibModal', '$templateCache'];
angular.module('utils.foodio').factory('printManager', printManager);
