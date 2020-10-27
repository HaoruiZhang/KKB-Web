const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('@koa/router');
const Nunjucks = require('nunjucks');

const categories = require('./data/categories.json');
const items = require('./data/items.json');

const app = new Koa();

Nunjucks.configure('./template', {
    // 开发环境下，设置 noCache 为 true，有利于测试看效果
    noCache: true,
    watch: true
});

// http://localhost:8888/public/css/css.css
app.use(KoaStaticCache('./public', {
    prefix: '/public',
    dynamic: true,
    gzip: true
}));

const router = new KoaRouter();


// 大部分的业务都放在下面处理了

// 商品首页
router.get('/', async ctx => {
    // console.log('categories', categories);
    ctx.body = Nunjucks.render('index.html', {
        categories,
        items
    });
});

// 商品详情
// :id 表示是一个动态路由，:id 是可变的，具体根据请求来决定
// 如果一个请求是以 /item 开始 然后，后面跟着 / 任意内容，就能满足该路由的规则
// :id 是一个占位符 变量，名称可以自己定，但是在中间件里面用的话需要使用这个名称
// (\\d+) 是对可变数据的 约束
router.get('/item/:id(\\d+)', async ctx => {
    // ctx.params => 对象，是 router 中间件根据当前url解析后的数据，里面存储了路由中动态部分当前实际内容
    // console.log('ctx', ctx.params);
    let id = Number(ctx.params.id);

    let item = items.find( d => d.id === id );
    ctx.body = Nunjucks.render('item.html', {
        categories,
        item
    });
});



app.use(router.routes());

app.listen(8888, () => {
    console.log(`服务启动成功：http://localhost:8888`);
});