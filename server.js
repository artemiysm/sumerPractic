const http = require('http');
const fs = require('fs');

function onerequest(request, response) {
    if (request.url === '/' || request.url === '/index.html') {
        fs.readFile('index.html', function(err, data) {
            if (err) {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.end('Ошибка при чтении index.html');
                return;
            }
            response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            response.end(data);
        });
    } 
    else if (request.url === '/style/index.css') {
        fs.readFile('style/index.css', function(err, data){
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('Файл style/index.css не найден');
                return;
            }
            response.writeHead(200, {'Content-Type': 'text/css; charset=utf-8'});
            response.end(data);
        });
    }
    else if (request.url === '/script/index.js') {
        fs.readFile('script/index.js', function(err, data){
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('Файл script/index.js не найден');
                return;
            }
            response.writeHead(200, {'Content-Type': 'text/javascript; charset=utf-8'});
            response.end(data);
        });
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('404: Page Not Found');
    }
}

const server = http.createServer(onerequest);
server.listen(3000, "127.0.0.1", function() {
    console.log("Server html is working on port 3000!!");
});
