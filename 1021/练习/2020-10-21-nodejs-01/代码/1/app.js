const http = require('http');
const fs = require('fs');
const mime = require('./mime.json');
// console.log('mime', mime);

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

            // 因为静态资源的种类比较多，所以我们需要为不同类型的静态资源返回不同类型 content-type
            // 需要根据请求的url的特征（一般利用文件的后缀名）

            // 1、获取当前请求的url后缀
            let lastPointIndex = filePath.lastIndexOf('.');
            // 2、根据 lastPointIndex 截取这个点后面的内容
            let suffix = filePath.substring(lastPointIndex);
            // console.log('suffix', suffix);
            // 通过 suffix 获取对应的 mime
            let mimeType = mime[suffix];
            // console.log('mimeType', mimeType);


            res.writeHead(200, 'ok', {
                'content-type': mimeType + '; charset=utf-8'
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