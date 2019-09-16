const fs = require('fs');
// 数据库配置文件
const defaultConfig = './config-default.js';//默认配置
const overrideConfig = './config-override.js';//生产环境配置
const testConfig = './config-test.js';//测试环境配置

let config = null;
// 设置当前环境
process.env.NODE_ENV="test";

// 判断当前环境
let { NODE_ENV } = process.env;
// 测试环境
if (NODE_ENV === "test") {
    console.log(`load ${testConfig}...`);
    config = require(testConfig);
} else {
    // 加载默认配置文件
    console.log(`load ${defaultConfig} ...`);
    config = require(defaultConfig);
    // 尝试加载生产环境配置
    try {
        if (fs.statSync(overrideConfig).isFile()) {
            console.log(`load ${overrideConfig} ...`)
            Object.assign(config, require(overrideConfig))
        }
    } catch (err) {
        console.error(err)
    }
}

module.exports = config;