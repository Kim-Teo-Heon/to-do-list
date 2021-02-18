const app = require('../app');
const http = require('http');

let port = 8080;

const server = http.createServer(app);

server.listen(port);
