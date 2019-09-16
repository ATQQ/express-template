const { user_token} = require("./../../database/model");


const addUserToken = async (token) => {
    
    let newToken=await user_token.create({
        token
    })
    console.log(newToken);
}

module.exports = {
    addUserToken
}