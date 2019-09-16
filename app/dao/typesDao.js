// types model

const { types } = require("./../../database/model");

/**
 * 增加分类数据
 * @param {Number} token_id 令牌id
 * @param {String} name 分类名称
 */
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