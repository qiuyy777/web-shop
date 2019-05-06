"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');


const app = express();

// 配置静态文件服务中间件
app.use('/static',express.static(path.join(__dirname, 'static')))  
app.use('/uploads',express.static('uploads'));

// 挂载cookie中间件
app.use(cookieParser());

// 挂载Session中间件
// 配置解析post请求体的中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 配置模板引擎,使用xtpl模板引擎，但是这个模板引擎是基于xtemplate的，所以要同时安装xtemplate和xtpl
app.set('views', path.join(__dirname, 'views'));
//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', require('xtpl').__express);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');


// 加载路由中间件
app.use(require('./router'));

// 开发环境错误处理中间件
// if(config.debug){
//   app.use(function (err, req, res, next) {
//     res.send('糟了，服务器玩儿崩溃了'+err.message);
//   });
// }

app.listen(3000,'127.0.0.1', function () {
  console.log('server is running at port 3000');
});
