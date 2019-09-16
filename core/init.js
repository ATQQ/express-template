const bodyParser = require('koa-bodyparser');

// 获取koa-router的所有路由
const routes = require('../controller')();
// 引入RestFul开发中间件
const rest = require('../middleware/rest');

class InitManager {
    static initCore(app) {
        app.use(async (ctx, next) => {
            await next();
            // 打印客户端请求
            console.log(`method:${ctx.request.method}----url:${ctx.request.url}----time:${ctx.response.get('Response-Time')}`);
        })

        app.use(async (ctx, next) => {
            const time = Date.now();
            await next();
            const ms = Date.now() - time;
            // 打印请求执行时间
            ctx.set('Response-Time', `${ms}ms`)
        })

        // 服务端错误
        app.on('error', err => {
            console.error('server error', err)
        });

        // KIA实例中注册引入的中间件
        app.use(bodyParser());
        app.use(rest.restify());
        app.use(routes);
    }
}

module.exports =InitManager