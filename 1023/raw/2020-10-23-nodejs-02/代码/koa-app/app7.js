const Koa = require('koa');

const app = new Koa();

// 在不改变原有中间件逻辑代码基础上进行扩展
app.use(async (ctx, next) => {
    // 注意这里，我们是要在原有中间件逻辑之后添加新的逻辑，所以先 调用 next。
    await next();
    ctx.body += ', kkb!';
});

app.use(async (ctx, next) => {
    // 这是我们开始的某个业务逻辑
    return new Promise((resolve) => {
        setTimeout(() => {
            ctx.body = 'hello';
            resolve();
        }, 1000);
    })
});

app.listen(8888, () => {
    console.log(`服务器启动成功：http://localhost:8888`);
});


// [
//     fn1,
//     fn2,
//     fn3
// ]

// function fn1() {
//     console.log('1 - start');
//     fn2();
//     console.log('1 - end');
// }

// function fn2() {
//     console.log('2 - start');
//     fn3();
//     console.log('3 - end');
// }

// function fn3() {
//     console.log('2 - start');
//     console.log('3 - end');
// }