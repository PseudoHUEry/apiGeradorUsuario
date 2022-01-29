const Hapi = require('@hapi/hapi'), 
environ = require('../infra/env/environ') 

module.exports = async() => {
    const server = Hapi.server({
       host: environ.host,
       port: environ.port
    });

    await server.start()
    server.route(require('./router/router'))
    console.log(server.info)
}
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
