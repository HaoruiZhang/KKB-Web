const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('@koa/router');
const Nunjucks = require('nunjucks');
const mysql = require('mysql2');
const KoaBody = require('koa-body');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Hr923142000',
    database: 'kkb'
});

const app = new Koa();

Nunjucks.configure('./template', {
    noCache: true,
    watch: true
});

const router = new KoaRouter();

// 渲染表单页面
router.get('/register', async ctx => {
    ctx.body = Nunjucks.render('register.html');
});

// 处理提交数据请求
router.post('/register', KoaBody(), async ctx => {

    console.log('body', ctx.request.body);
    let {name:username} = ctx.request.body;
    console.log(username);
  
    let rs = await query(
        "insert into `users` (`username`) values (?)",
        [ 
            username,
        ]
    );
    console.log("rs:\n", rs)
    ctx.body = rs;
});

app.use(router.routes());

app.listen(8888, () => {
    console.log(`服务启动成功：http://localhost:8888`);
});


function query(sql, data) {
    return new Promise( (resolve, reject) => {
        connection.query(sql, data, function(err, ...data) {
            if (err) {
                reject("注册失败");
            } else {
                resolve("注册成功");
            }
        })
    } );
}