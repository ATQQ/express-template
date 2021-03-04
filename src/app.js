const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')

// 读取-打印环境变量
// 读取.env环境变量配置文件
console.log(dotenv.config());

const { serverConfig } = require('./config')

// 实例化express
const app = express()

// 注册一些中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ strict: true }))

// 首先进入的路由
app.route('*').all((req, res, next) => {
    console.log(req.url);
    next()
})


app.post('/path1/path2/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send({
        code: 0,
        errMsg: 'success'
    })
})

app.get('/path1/path2/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send({
        code: 0,
        errMsg: 'success'
    })
})

app.delete('/path1/path2/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send({
        code: 0,
        errMsg: 'success'
    })
})

app.put('/path1/path2/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    res.send({
        code: 0,
        errMsg: 'success'
    })
})

app.listen(serverConfig.port, serverConfig.hostname, () => {
    console.log(`server start at ${serverConfig.hostname}:${serverConfig.port}`);
})