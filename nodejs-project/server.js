const express = require('express');
const app = express();//创建一个服务器
const bodyParser = require('body-parser');
const path = require('path');
// 连接数据库
// const db = require('./src/model/mongoose.js');
app.use(bodyParser.urlencoded({extended:false}));//解析post请求
//静态资源服务器
// app.use(express.static(path.join(__dirname,'./public')));
// app.use('/admin',express.static(path.join(__dirname,'./admin')));
app.use(express.static('./'));
// 关于商品的路由
const goodsRouter=require('./src/router/goods2.js');
app.use('/goods',goodsRouter);
// 关于上传的路由
const uploadRouter=require('./src/router/upload.js');
app.use('/upload',uploadRouter);

app.listen(5002,()=>{
    console.log('server start in port：'+5002);//端口服务器启动
})