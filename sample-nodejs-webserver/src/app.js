const RequestResponseHelper = require('../helper/RequestResponseHelper');

const requestListener = (request, response) => {

    // request and response is event stream

    // Get from class RequestResponseHelper
    const helper = new RequestResponseHelper(request, response);

    const {method, url} = helper.getRequest(); // get: http method (GET, POST, PUT, PATCH, DELETE) and urls

    // regarding json mime type: https://stackoverflow.com/questions/477816/what-is-the-correct-json-content-type
    // set header of mime type
    helper.setHeader('Content-Type', 'application/json');
    helper.setHeader('X-Powered-By', 'NodeJS');

    const endpoint = '/api';

    if (url === `${endpoint}/` || url === `${endpoint}` || url === `/` || url === '') {
        helper.setResponse(200, 'success', `Hello, world!`);
    } else if (url === `${endpoint}/data`) {
        if (method === 'GET') {
            helper.setResponse(200, 'success', `Hello from ${method}`);
        }
        if (method === 'POST') {
            helper.streamData();
            // Do this in terminal:
            // curl -X POST http://localhost:5000 -d "{\"name\": \"test\", \"id\": \"1\", \"mail\": \"mail@test.com\"}" //OK
            // curl -X POST http://localhost:5000 -d "{\"name\": \"test\", \"id\": \"1\"}" //OK
        }
        if (method === 'PUT') {
            helper.setResponse(200, 'success', `Hello from ${method}`);
        }
        if (method === 'DELETE') {
            helper.setResponse(200, 'success', `Hello from ${method}`);
        }
    } else if (url === `${endpoint}/about`) {
        if (method === 'GET'){
            helper.setResponse(200, 'success', `Sample nodejs API`);
        } else {
            helper.setResponse(400, 'fail',
                `URL: ${url} only can access with method: GET, you're accessing with method: ${method}`);
        }
    } else {
        helper.setResponse(404, 'fail', `URL is not available`);
    }

};

module.exports = requestListener;