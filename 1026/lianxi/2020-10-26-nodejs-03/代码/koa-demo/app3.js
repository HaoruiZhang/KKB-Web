const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('@koa/router');
const Nunjucks = require('nunjucks');

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

    let data = {
        title: '欢迎来到开课吧123'
    };

    // let templateContent = 'Hello {{ title }}';

    // templateContent = Nunjucks.renderString(templateContent, data);
    // console.log('templateContent', templateContent);

    let templateContent = Nunjucks.render('index.html', data);

    ctx.body = templateContent;
});



app.use(router.routes());

app.listen(8888, () => {
    console.log(`服务启动成功：http://localhost:8888`);
});