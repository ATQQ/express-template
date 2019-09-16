const { APIError } = require("../../middleware/rest");
const typesService = require("../service/typesService");

/**
 * 增加分类数据接口
 * @request {String} name 分类名称
 * @request {Number} token_id 口令id
 */
const fn_addTypes = async (ctx, next) => {
    const { token_id,name } = ctx.request.body;
    typesService.addTypes(token_id,name);
    ctx.rest({
        code: 200,
        errMsg: ''
    })
}
module.exports = {
    "POST /api/types/add": fn_addTypes
}