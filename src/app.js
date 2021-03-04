const dotenv = require('dotenv')

console.log('环境变量')
console.log(dotenv.config())

const express = require('express')
const bodyParser = require('body-parser')
const mainRouter = require('./routes')

// 读取-打印环境变量
// 读取.env环境变量配置文件

const { serverConfig } = require('./config')

// 实例化express
const app = express()

// 注册一些中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ strict: true }))

// 首先进入的路由
app.route('*').all((req, res, next) => {
  console.log(`${req.method}--${req.url}`)
  next()
})
// 注册所有路由
app.use(mainRouter)

app.listen(serverConfig.port, serverConfig.hostname, () => {
  console.log(`server start at ${serverConfig.hostname}:${serverConfig.port}`)
})
