const { APIError } = require("../rest");
const userService=require("../service/userService");

const fn_addUser = async (ctx, next) => {
    const {token}=ctx.request.body;
    await userService.addUserToken(token);
}
module.exports = {
    "POST /api/user/add": fn_addUser
}