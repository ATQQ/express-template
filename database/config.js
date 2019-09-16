const fs = require('fs');
const defaultConfig = './config-default.js';
const overrideConfig = './config-override.js';
const testConfig = './config-test.js';

let config = null;

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