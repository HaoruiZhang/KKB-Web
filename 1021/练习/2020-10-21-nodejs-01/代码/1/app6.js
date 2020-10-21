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

    
    // let filePath = './public' + url;

    // console.log('url', url, filePath);

    if (url.includes('.ico')) {
        res.end('');
    } else {
        
        // 把动态资源和静态资源的访问规则制定一下，加以区别

        if (url.startsWith('/public')) {
            let filePath = '.' + url;

            res.writeHead(200, 'ok', {
                'content-type': 'text/html; charset=utf-8'
            });
            content = fs.readFileSync(filePath);
            res.end(content);
        } else {
            // 动态资源的url一般没有太多的规则，所以一般都需要一个一个的定义
            if (url === '/getDateTime') {
                res.writeHead(200, 'ok', {
                    'content-type': 'text/html; charset=utf-8'
                });
                res.end(new Date().toString());
            }
        }
        
        
    }

    

} );

server.listen(8888, () => {
    console.log(`服务器启动成功：http://localhost:8888`);
});