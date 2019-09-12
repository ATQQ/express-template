const Koa = require('koa'),
    bodyParser = require('koa-bodyparser');

const app = new Koa();
const routes = require('./controller')();

const rest=require('./rest');

const port=9000;


app.use(async (ctx, next) => {
    await next();
    console.log(`method:${ctx.request.method}----url:${ctx.request.url}----time:${ctx.response.get('Response-Time')}`);
})

app.use(async(ctx,next)=>{
    const time=Date.now();
    await next();
    const ms=Date.now()-time;
    ctx.set('Response-Time',`${ms}ms`)
})


app.use(bodyParser());
app.use(rest.restify());
app.use(routes);

// 服务端错误
app.on('error', err => {
    console.error('server error', err)
});

app.listen(port);

console.info(`app start success port http://localhost:${port}`);
