const Koa = require('koa');
const staticCache = require('koa-static-cache');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

app.use( staticCache('./public', {
    prefix: '/static',
    dynamic: true,
    gzip: true
}) );

// app.use(async (ctx, next) => {
//     ctx.body = '欢迎';
// });

router.get('/', async (ctx, next) => {
    ctx.body = '首页';
});

router.get('/login', async (ctx, next) => {
    ctx.body = '登录';
});

router.get('/register', async (ctx, next) => {
    ctx.body = '注册';
});

// router.middlewares = [
//     {method: 'get', url: '/', (ctx, next) => {
    
//     }}
// ]

// routes() 中间件内部会分析访问的方法，url，然后去router内部找对应的函数进行执行
app.use( router.routes() );


app.listen(8888, () => {
    console.log(`服务器启动成功：http://localhost:8888`);
});