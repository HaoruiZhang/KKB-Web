const Koa = require('koa');

const app = new Koa();

app.middleware.push(function(ctx, next) {
    console.log('我的业务逻辑1');

    next();
})

app.middleware.push(function() {
    console.log('我的业务逻辑2');
})

Promise.resolve(function(ctx, p2) {
    console.log('我的业务逻辑');
})

let p2 = Promise.resolve(function() {
    console.log('我的业务逻辑2');
})

app.listen(8888, () => {
    console.log(`服务器启动成功：http://localhost:8888`);
});