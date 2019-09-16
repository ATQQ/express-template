const bodyParser = require('koa-bodyparser');

const routes = require('../controller')();

const rest = require('../middleware/rest');

class InitManager {
    static initCore(app) {
        app.use(async (ctx, next) => {
            await next();
            console.log(`method:${ctx.request.method}----url:${ctx.request.url}----time:${ctx.response.get('Response-Time')}`);
        })

        app.use(async (ctx, next) => {
            const time = Date.now();
            await next();
            const ms = Date.now() - time;
            ctx.set('Response-Time', `${ms}ms`)
        })

        // 服务端错误
        app.on('error', err => {
            console.error('server error', err)
        });

        app.use(bodyParser());
        app.use(rest.restify());
        app.use(routes);
    }
}

module.exports =InitManager