const db = require('../../database/db');
module.exports = db.defineModel('user_token', {
    token: {
        type:db.STRING(64),
        unique: true,
        allowNull: false
    }
})