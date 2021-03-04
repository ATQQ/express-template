const { getDBConnection } = require('./../mongodb')

function findUserData() {
    getDBConnection().then(({ db, Db }) => {
        Db.collection('user').find().toArray().then(data => {
            console.log(data)
            db.close()
        })
    })
}

module.exports = {
    findUserData
}