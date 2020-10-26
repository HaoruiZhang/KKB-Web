const Koa = require('koa');

const app = new Koa();

app.use( (ctx) => {
    ctx.body = 'Hello!';
} );

app.listen(8888, () => {
    console.log(`服务器启动成功：http://localhost:8888`);
});