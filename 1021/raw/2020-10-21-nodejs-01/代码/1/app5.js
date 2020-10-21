const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    let url = req.url;

    // 我们把这种资源（css，js、html）保存在一个外部文件中，这样方便我们管理，编写，以及统一处理，然后我们会这种文件定义一套访问规则

    /**
     * url /css.css => fs => public/css.css
     * url /dahai.html => fs => public/dahai.html
     * url /diange.js => fs => public/diange.js
     */

    let content = '';

    
    let filePath = './public' + url;

    console.log('url', url, filePath);

    if (url.includes('.ico')) {
        res.end('');
    } else {
        // 在不修改文件的基础上，访问的内容保持不变的资源 - 静态资源
        res.writeHead(200, 'ok', {
            'content-type': 'text/html; charset=utf-8'
        });
        content = fs.readFileSync(filePath);
        res.end(content);
    }

    

} );

server.listen(8888, () => {
    console.log(`服务器启动成功：http://localhost:8888`);
});