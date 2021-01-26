const app = require('../app');
const http = require('http');

let port = 3000;

const server = http.createServer(app);

server.listen(port);
