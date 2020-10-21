const http = require('http');

const server = http.createServer( (req, res) => {
    /**
     * http
     *      协议：做某件事情的一种规范和标准（约束）
     *          超文本传输协议：超文本在网络中传输的一种规范
     *          tcp/ip: 数据传输规范
     */

    console.log('有人发送了一个请求');

    // 虚拟路径，不是服务器中某个资源的真实路径
    // console.log('url', req.url);

    // 向客户端写入头信息
    

    let url = req.url;

    if (url === '/') {
        res.writeHead(200, 'ok', {
            'content-type': 'text/html; charset=utf-8'
        });
        res.end('<h1>欢迎来到开课吧</h1>');
    }

    if (url === '/login') {
        res.writeHead(200, 'ok', {
            'content-type': 'text/html; charset=utf-8'
        });
        res.end('<h1>登录页面</h1>');
    }
} );

server.listen(8888, () => {
    

    console.log(`服务器启动成功：http://localhost:8888`);
});