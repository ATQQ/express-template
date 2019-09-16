module.exports = {
    // 自定义异常
    APIError: function (code, message) {
        this.code = code || 'internal:unknown_error';
        this.message = message || '';
    },
    // restful中间件
    restify: (prefix) => {
        prefix = prefix || "/api/";
        return async (ctx, next) => {
            // 处理所有以prefix开头的请求
            if (ctx.request.path.startsWith(prefix)) {
                ctx.rest = (data) => {
                    ctx.response.type = 'application/json';
                    ctx.response.body = data;
                }
                try {
                    // 捕获请求中的异常情况
                    await next();
                } catch (e) {
                    // 返回错误:
                    ctx.response.status = 400;
                    ctx.response.type = 'application/json';
                    ctx.response.body = {
                        code: e.code || 'internal:unknown_error',
                        message: e.message || ''
                    };
                }
            } 
            // 否则直接放行
            else {
                await next();
            }
        }
    }
}