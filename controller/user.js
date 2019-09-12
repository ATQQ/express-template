const { APIError } = require("../rest");

const fn_testGet = async (ctx, next) => {
    ctx.rest({
        code: 200,
        data: "test"
    })
}
module.exports = {
    "GET /api/user/test": fn_testGet
}