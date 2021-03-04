const mainRouter = require('express').Router()

const testRouter = require('./modules/test')
const demoRouter = require('./modules/demo');

[testRouter, demoRouter].forEach(({ prefix, router }) => {
  mainRouter.use(prefix, router)
})

module.exports = mainRouter
