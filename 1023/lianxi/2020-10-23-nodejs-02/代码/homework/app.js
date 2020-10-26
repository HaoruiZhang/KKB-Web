const http = require('http');
const fs = require('fs');
const mime = require('./mime.json');

const quotes = [

    '虽然我个子矮，但我发际线高啊！',

    '有些事情做不完，就留到明天做吧。运气好的话，明天死了就不用做了。',

    '善良没用，你得漂亮。',

    '好好活下去 每天都有新打击。',

    '活着的时候把自己搞得好看一点，这样你就不会死得太难看。',

    '世上无难事 只要肯放弃。',

    '加油，你是最胖的！'
];

const server = http.createServer((req, res) => {

    let url = req.url;
    let statusCode = 200;
    let content = '';
    let mimeType = 'text/html';

    // 静态资源访问
    if (url.startsWith('/public')) {

        let filePath = '.' + url;


        try {
            let lastPointIndex = filePath.lastIndexOf('.');
            let suffix = filePath.substring(lastPointIndex);
            mimeType = mime[suffix];
            content = fs.readFileSync(filePath);
        } catch (e) {
            statusCode = 400;
            content = fs.readFileSync('./public/404.html');
        }

        res.writeHead(statusCode, {
            'content-type': `${mimeType};charset="utf-8"`
        });
        res.end(content);

    } else {
        if (url === '/quote') {
            res.writeHead(statusCode, {
                'content-type': `${mimeType};charset="utf-8"`
            });

            content = quotes.sort( () => Math.random() - .5 )[0];

            res.end(content);
        }
    }

});

server.listen(8888, () => {
    console.log(`服务器启动成功：http://localhost:8888`);
});