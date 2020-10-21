const http = require('http');

const server = http.createServer( (req, res) => {
    let url = req.url;

    if (url === '/') {
        res.writeHead(200, 'ok', {
            'content-type': 'text/html; charset=utf-8'
        });
        res.end('<link href="css" rel="stylesheet" /><h1>欢迎来到开课吧</h1>');
    }

    if (url === '/css') {
        res.writeHead(200, 'ok', {
            'content-type': 'text/css; charset=utf-8'
        });
        res.end('body {color: red}');
    }

    if (url === '/login') {
        res.writeHead(200, 'ok', {
            'content-type': 'text/html; charset=utf-8'
        });
        res.end('<h1>登录页面</h1>');
    }
} );

server.listen(8888, () => {
    

    console.log(`服务器启动成功：http://localhost:8888`);
});