const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    let url = req.url;

    // 我们把这种资源（css，js、html）保存在一个外部文件中，这样方便我们管理，编写，以及统一处理，然后我们会这种文件定义一套访问规则

    let content = '';

    if (url === '/') {
        res.writeHead(200, 'ok', {
            'content-type': 'text/html; charset=utf-8'
        });
        content = fs.readFileSync('./public/dahai.html');
        res.end(content);
    }

    if (url === '/css') {
        res.writeHead(200, 'ok', {
            'content-type': 'text/css; charset=utf-8'
        });
        content = fs.readFileSync('./public/css.css');
        res.end(content);
    }

    if (url === '/js') {
        res.writeHead(200, 'ok', {
            'content-type': 'application/javascript; charset=utf-8'
        });
        content = fs.readFileSync('./public/diange.js');
        res.end(content);
    }

} );

server.listen(8888, () => {
    

    console.log(`服务器启动成功：http://localhost:8888`);
});