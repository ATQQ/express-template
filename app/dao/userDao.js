// 引入user_token model
const { user_token} = require("./../../database/model");

/**
 * 增加一条口令
 * @param {String} token 
 */
const addUserToken = async (token) => {
    let newToken=await user_token.create({
        token
    })
    console.log(newToken);
}

module.exports = {
    addUserToken
}