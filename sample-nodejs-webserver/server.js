const http = require('http');
const requestListener = require('./app');

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`server running at http://${host}:${port}`);
    console.log(`hit CTRL + C to end this server`);
});