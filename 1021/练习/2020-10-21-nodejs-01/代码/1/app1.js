// 127.0.0.1 => 本机网络地址，专门自己给自己打电话所使用的号码
// console.log('欢迎来到开课吧', window);

// 首先通过 require 引入 http 模块
const http = require('http');

// 创建一个 Server 对象，用来处理请求
const server = http.createServer( (req, res) => {
    // 当有请求的时候，会在服务端控制台打印
    console.log('有人发送了一个请求');
    // console.log('req', req);

    // localhost => 127.0.0.1

    // req => http.IncomingMessage 对象：当前发送请求的客户端对象（提供保存了与当前请求的客户端相关信息）
    // res => http.ServerResponse 对象：提供了一个服务端向客户端进行响应一些方法

    // http: 非持久性链接，http目的是返回数据资源的，不在乎他的实时性，当当前这次请求完成以后，为了保证资源不被长久占用，为更多的请求提供服务
    // res.write('Hello');
    // 告诉客户端，我们的响应以及完成了，调用 end 方法
    res.end('hello');
} );

// server.on('request', () => {
//     console.log('有人发送了一个请求');
// });

// 不要让程序退出，并且要监听一个网络端口
// 端口：把数据与具体的应用程序（比如当前这个server）进行绑定的一种机制
// server.listen(8888, '0.0.0.0');
server.listen(8888, () => {
    

    console.log(`服务器启动成功：http://localhost:8888`);
});