const { query: mongodbQuery } = require('../mongodb')

function updateCollection(collection, query, data, many = false) {
  return mongodbQuery((db, resolve) => {
    if (many) {
      db.collection(collection).updateMany(query, data).then(resolve)
      return
    }
    db.collection(collection).updateOne(query, data).then(resolve)
  })
}

function insertCollection(collection, data, many = false) {
  return mongodbQuery((db, resolve) => {
    if (many) {
      db.collection(collection).insertMany(data).then(resolve)
      return
    }
    db.collection(collection).insertOne(data).then(resolve)
  })
}
function findCollection(collection, query) {
  return mongodbQuery((db, resolve) => {
    db.collection(collection).find(query).toArray().then((data) => {
      resolve(data.map((v) => {
        // eslint-disable-next-line no-underscore-dangle
        v._id = undefined
        // 屏蔽_id
        return v
      }))
    })
  })
}
module.exports = {
  updateCollection,
  insertCollection,
  findCollection,
}
