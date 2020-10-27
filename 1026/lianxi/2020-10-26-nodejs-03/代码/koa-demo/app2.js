const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('@koa/router');
const fs = require('fs');

const app = new Koa();

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
        title: '欢迎来到开课吧'
    };

    let templateContent = fs.readFileSync('./template/index.html').toString();

    // 因为这里还要对 templateContent  的内容进行一些逻辑处理，才能返回给前端

    // 对模板中的一些可变的标记部分进行替换，生成一个最终的页面，返回给客户端
    templateContent = templateContent.replace( /\{\{(\w+)\}\}/g, function($0, $1) {
        // console.log('$1', $1);
        return data[$1];
    } );

    // console.log('templateContent', templateContent);

    ctx.body = templateContent;
});



app.use(router.routes());

app.listen(8888, () => {
    console.log(`服务启动成功：http://localhost:8888`);
});