const { user_token } = require("./../../database/model");

const addTypes = async (token_id, name) => {
    const type = await types.create({
        token_id,
        name
    })
    console.log(type);
}

module.exports ={
    addTypes
}