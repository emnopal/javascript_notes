// learn more: https://hapi.dev/api/?v=20.1.0#response-toolkit

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const {param1, param2} = request.query;
            return h
                .response(
                    JSON.stringify({
                        'message': `Homepage${' with query param1: ' + param1 ?? ''}${' with query param2: ' + param2 ?? ''}`
                    }))
                .code(200)
                .type('application/json')
                ;
        },
    },
    {
        method: 'GET',
        path: '/users/{username?}', // {username}: username is mandatory, {username?}: username is not mandatory
        handler: (request, h) => {
            const {username} = request.params;
            return h
                .response(
                    JSON.stringify({
                        'message': `test username: ${username ?? 'no username'}`
                    }))
                .code(200)
                .type('application/json')
                ;
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            const {username, password} = request.payload; // body/payload/post/put/patch request
            return h
                .response(
                    JSON.stringify({
                        'message': `welcome ${username}!`
                    }))
                .code(200)
                .type('application/json')
                ;
        }
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return h
                .response(
                    JSON.stringify({
                        'message': 'Halaman tidak dapat diakses dengan method tersebut'
                    }))
                .code(404)
                .type('application/json')
                ;
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return h
                .response(
                    JSON.stringify({
                        'message': 'About page'
                    }))
                .code(200)
                .type('application/json')
                ;
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return h
                .response(
                    JSON.stringify({
                        'message': 'Halaman tidak dapat diakses dengan method tersebut'
                    }))
                .code(404)
                .type('application/json')
                ;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return h
                .response(
                    JSON.stringify({
                        'message': 'Halaman tidak ditemukan'
                    }))
                .code(404)
                .type('application/json')
                ;
        },
    },
];

module.exports = routes;