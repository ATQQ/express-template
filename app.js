//引入Koa2框架
const Koa = require('koa');

const InitManager=require( "./core/init");
// 数据库初始化,自动扫描加载model
const init = require("./database/init-db");

const app = new Koa();
// 注册部分中间件
InitManager.initCore(app);

const port=9000;

app.listen(port);

console.info(`app start success port http://localhost:${port}`);
