const { query } = require('../mongodb')

function findUser() {
  return query((db, resolve) => {
    db.collection('user').find().toArray().then(resolve)
  })
}

module.exports = {
  findUser,
}
