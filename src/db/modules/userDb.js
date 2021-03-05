const { query: mongodbQuery } = require('../mongodb')
const { query: mysqlQuery } = require('../mysql')

function findUser() {
  return mongodbQuery((db, resolve) => {
    db.collection('user').find().toArray().then(resolve)
  })
}

function selectUserByUsername(username) {
  const sql = 'select * from user where username = ?'
  return mysqlQuery(sql, username)
}

module.exports = {
  findUser,
  selectUserByUsername,
}
