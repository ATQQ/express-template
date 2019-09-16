const model = require("./../database/model");

const init = require("./../database/init-db")


// 增加
let user_token = model.user_token;

const addUserToken = async (token) => {
    let newToken=await user_token.create({
        token
    })
    console.log(newToken);
    ctx.rest({
        code:200,
        errMsg:"OK"
    })
}

module.exports = {
    addUserToken
}