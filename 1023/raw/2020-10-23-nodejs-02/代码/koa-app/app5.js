const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log('a - start');
    next();
    console.log('a - end');
});

app.use(async (ctx, next) => {
    console.log('b - start');
    next();
    console.log('b - end');
});

app.use(async (ctx, next) => {
    console.log('c - start');
    next();
    console.log('c - end');
});

app.use(async (ctx, next) => {
    console.log('d - start');
    next();
    console.log('d - end');
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