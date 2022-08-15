const Hapi = require('@hapi/hapi');

const init = async(routes) => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    server.route(routes);

    await server.start();
    console.log(`server is running on: ${server.info.uri}`)
}

module.exports = init;