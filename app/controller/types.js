const { APIError } = require("../../middleware/rest");
const typesService = require("../service/typesService");

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