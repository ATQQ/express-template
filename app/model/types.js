const db = require('../../database/db');
module.exports = db.defineModel('types', {
    token_id:{
        type:db.INTEGER,
        allowNull: false
    },
    name: {
        type:db.STRING(64),
        allowNull: false
    }
})