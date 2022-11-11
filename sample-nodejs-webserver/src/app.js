const httpHandler = require('../helper/httpHandler');

const requestListener = (request, response) => {

    // Get function from httpHandler module
    const {setResponse, streamData} = httpHandler(request, response);

    const {method, url} = request; // get: http method (GET, POST, PUT, PATCH, DELETE) and urls

    const endpoint = '/api';

    // regarding json mime type: https://stackoverflow.com/questions/477816/what-is-the-correct-json-content-type
    // set header of mime type
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');

    if (url === `${endpoint}/` || url === `${endpoint}` || url === `/` || url === '') {
        setResponse(200, 'success', `Hello, world!`);
    } else if (url === `${endpoint}/data`) {
        if (method === 'GET') {
            setResponse(200, 'success', `Hello from ${method}`);
        }
        if (method === 'POST') {
            streamData();
        }
        if (method === 'PUT') {
            setResponse(200, 'success', `Hello from ${method}`);
        }
        if (method === 'DELETE') {
            setResponse(200, 'success', `Hello from ${method}`);
        }
    } else if (url === `${endpoint}/about`) {
        if (method === 'GET') {
            setResponse(200, 'success', `Sample nodejs API`);
        } else {
            setResponse(400, 'fail', `URL: ${url} only can access with method: GET, you're accessing with method: ${method}`);
        }
    } else {
        setResponse(404, 'fail', `URL is not available`);
    }

};

// Do this on terminal:
// curl -X POST http://localhost:5000 -d "{\"name\": \"test\", \"id\": \"1\", \"mail\": \"mail@test.com\"}" //OK
// curl -X POST http://localhost:5000 -d "{\"name\": \"test\", \"id\": \"1\"}" //OK

module.exports = requestListener;