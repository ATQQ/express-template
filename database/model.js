const fs = require('fs'),
    db = require("./db");

const modelBasePath =`${__dirname}/../model`;
// 获取文件名数组
let files = fs.readdirSync(modelBasePath,"utf8");

// 过滤出目标文件
let jsFiles = files.filter((file) => {
    return file.endsWith('.js');
})

module.exports = {};

// 引入目标文件
jsFiles.forEach((f) => {
    console.log(`import model from files ${f}`)
    // 截取文件名
    let filename = f.substring(0, f.length - 3);
    module.exports[filename] = require(`${modelBasePath}/${f}`);
})

module.exports.sync = () => {
    db.sync();
}