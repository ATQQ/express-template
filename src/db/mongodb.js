const { MongoClient } = require('mongodb')
const { mongodbConfig } = require('./../config')
const { host, port, user, password, database } = mongodbConfig
const url = `mongodb://${user}:${password}@${host}:${port}/${database}`


function getDBConnection() {
    return new Promise((res, rej) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }).then(db => {
            res({
                db,
                Db: db.db(database)
            })
        }).catch(err => {
            rej(err)
        })
    })
}

module.exports = {
    getDBConnection
}