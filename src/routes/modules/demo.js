const { findUserData } = require('../../db/modules/userDb');

const router = require('express').Router()

router.post('/path2/:id', (req, res) => {
    findUserData()
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send({
        code: 0,
        errMsg: 'success'
    })
})

router.get('/path2/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send({
        code: 0,
        errMsg: 'success'
    })
})

router.delete('/path2/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send({
        code: 0,
        errMsg: 'success'
    })
})

router.put('/path2/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send({
        code: 0,
        errMsg: 'success'
    })
})

module.exports = {
    prefix: '/demo',
    router
}