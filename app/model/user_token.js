const db = require('../../database/db');
// 定义model数据
module.exports = db.defineModel('user_token', {
    token: {
        type:db.STRING(64),
        unique: true,
        allowNull: false
    }
})