const { APIError } = require("../../middleware/rest");
const userService=require("../service/userService");

const fn_addUser = async (ctx, next) => {
    const {token}=ctx.request.body;
    userService.addUserToken(token);
    ctx.rest({
        code:200,
        errMsg:''
    })
}
module.exports = {
    "POST /api/user/add": fn_addUser
}