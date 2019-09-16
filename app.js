const Koa = require('koa');
const InitManager=require( "./core/init");
const init = require("./database/init-db");

const app = new Koa();

InitManager.initCore(app);

const port=9000;

app.listen(port);

console.info(`app start success port http://localhost:${port}`);
