var http = require('http');
var fs = require('fs');
var path = require('path');
const db = require('./db.js');
const ejs = require('ejs');

http.createServer(function (request, response) {
    console.log('request ', request.url);

    var filePath = request.url;
    // if (filePath == '/') {
    //     filePath = './todolist.html';
    // } else if (filePath =="/todolist.js"){
    //     filePath='./todolist.js'
    // } else if (filePath =="/todolist.css"){
    //     filePath='./todolist.css';
    // }

    switch(filePath){
        case '/':
        filePath= './views/todolist.ejs';
        break;
        case "/todolist.js":
        filePath='./todolist.js';
        break;
        case "/todolist.css":
        filePath='./views/todolist.css';
        break;
    }


    var extname = path.extname(filePath);
    var mimeTypes = {
        '.ejs': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };
    var contentType = mimeTypes[extname] ;

    fs.readFile(filePath, 'utf-8', function(error, content) {
        if (error) {
            throw error;
        }
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(ejs.render(content,{todolist : 1}), 'utf-8');
    });
}).listen(3000);