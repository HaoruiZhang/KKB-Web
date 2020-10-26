const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    ctx.body += ', kkb!';
    console.log(ctx.state.a);
    
    // console.log(ctx.request.URL);
});

app.use(async (ctx, next) => {
    let a = 100;
    // ctx.a = a;
    ctx.state.a = a;
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