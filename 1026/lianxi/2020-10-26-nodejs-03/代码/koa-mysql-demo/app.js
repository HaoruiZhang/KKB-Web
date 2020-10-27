const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('@koa/router');
const Nunjucks = require('nunjucks');
const mysql = require('mysql2');
const KoaBody = require('koa-body');

// const categories = require('./data/categories.json');
// const items = require('./data/items.json');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hr923142000',
    database: 'kkb'
});

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
    let categories = await query(
        'select * from `users`'
    );

    // console.log('rs', rs);

    ctx.body = Nunjucks.render('index.html', {
        categories
        // page,
        // pages
    });
});


// 渲染表单页面
router.get('/register', async ctx => {
    
    let users = await query(
        'select * from `users`'
    );

    ctx.body = Nunjucks.render('register.html', {
        users
    });
});

// 处理提交数据请求
router.post('/register', KoaBody(), async ctx => {
    // post 提交的数据解析后存储 ctx.request.body
    console.log('body', ctx.request.body);
    let {name:username} = ctx.request.body;
    console.log(username);
    
    let rs = await query(
        "insert into `users` (`username`) values (?)",
        [ 
            username,
        ]
    );

    ctx.body = '添加成功';
});



app.use(router.routes());

app.listen(8888, () => {
    console.log(`服务启动成功：http://localhost:8888`);
});


function query(sql, data) {
    return new Promise( (resolve, reject) => {
        connection.query(sql, data, function(err, ...data) {
            if (err) {
                reject(err);
            } else {
                resolve(...data);
            }
        })
    } );
}