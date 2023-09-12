const Hapi = require('@hapi/hapi');
const alias = require('./routes');

// Konfigurasi server
const initialize = async () => {
  const service = Hapi.server({
    port: 2001,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  service.route(alias);

  await service.start();
  console.log(`Hi anggis, Server sedang berjalan ${service.info.uri}`);
};

initialize();
