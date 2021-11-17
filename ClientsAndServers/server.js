const { fstat } = require('fs');
const http = require('http');

const server = http.creatServer((req, res) => {
    console.log('req.url, req.method');

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':    
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile('./views/index.html', (err, data) => {
        if (err) {
            console.log(err)
            res,end(data);
        }  else {
            res.end(data);
        } else {
            res.statusCode = 200;
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})

