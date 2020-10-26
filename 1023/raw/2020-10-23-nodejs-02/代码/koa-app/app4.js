const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log('a');
    next();
});

app.use(async (ctx, next) => {
    console.log('b');
    next();
});

app.use(async (ctx, next) => {
    console.log('c');
    next();
});

app.use(async (ctx, next) => {
    console.log('d');
    next();
});

app.listen(8888, () => {
    console.log(`服务器启动成功：http://localhost:8888`);
});