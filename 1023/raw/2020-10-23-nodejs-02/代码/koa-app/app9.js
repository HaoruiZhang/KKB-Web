const Koa = require('koa');
const fs = require('fs');
const mime = require('./mime.json');

const app = new Koa();

app.use(async (ctx, next) => {
    let url = ctx.req.url;
    let statusCode = 200;
    let content = '';
    let mimeType = 'text/html';

    if (url.startsWith('/public')) {

        let filePath = '.' + url;

        // console.log('filePath', filePath);

        try {
            let lastPointIndex = filePath.lastIndexOf('.');
            let suffix = filePath.substring(lastPointIndex);
            mimeType = mime[suffix];
            content = fs.readFileSync(filePath);
        } catch (e) {
            console.log('e', e);
            statusCode = 400;
            content = fs.readFileSync('./public/404.html');
        }

        ctx.status = statusCode;
        ctx.set('content-type', `${mimeType};charset="utf-8"`);
        ctx.body = content;

    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    ctx.body = '欢迎';
})


app.listen(8888, () => {
    console.log(`服务器启动成功：http://localhost:8888`);
});