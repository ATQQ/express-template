const fs = require('fs');

/**
 * 判断请求的方法
 * @param {String} url 
 * @return {String} POST|GET|DELETE|PUT|err
 */
const judgeRequestMethod = (url) => {
    const methods = ['GET', "POST", "PUT", "DELETE"];
    return methods.find(v => {
        return url.startsWith(v);
    }) || 'err';
}

/**
 * 为router 注册 url-mapping
 * @param {koa-router} router koa-router
 * @param {url-mapping} mapping 
 */
const addMapping = (router, mapping) => {
    // 扫描导出的url
    for (const url of Object.keys(mapping)) {
        let path = '';
        switch (judgeRequestMethod(url)) {
            case 'GET':
                path = url.substring(4);
                router.get(path, mapping[url]);
                console.log(`register URL mapping: GET ${path}`)
                break;
            case 'POST':
                path = url.substring(5);
                router.post(path, mapping[url]);
                console.log(`register URL mapping: POST ${path}`)
                break;
            case 'DELETE':
                path = url.substring(7);
                router.del(path, mapping[url]);
                console.log(`register URL mapping: DELETE ${path}`)
                break;
            case "PUT":
                path = url.substring(4);
                router.put(path, mapping[url]);
                console.log(`register URL mapping: PUT ${path}`)
                break;
            default:
                console.log(`invalid URL: ${url}`)
                break;
        }
    }
}

/**
 * 导入controllers
 * @param {koa-router} router koa-router
 * @param {String} dir  controllers目录
 */
const addControllers = (router, dir) => {
    // 扫描controllers下的文件
    let files = fs.readdirSync(__dirname + dir);

    // 过滤出.js文件
    let js_files = files.filter(v => {
        return v.endsWith('.js');
    })

    for (const file of js_files) {
        console.log(`controllers process ${file}...`);
        // 导入js文件
        let mapping = require(__dirname + dir + '/' + file)
        addMapping(router, mapping);
    }
}

/**
 * @param {String} dir controllers目录
 */
module.exports = (dir) => {
    let controllers_dir = dir || '/controller',
        router = require('koa-router')();
    addControllers(router, controllers_dir);
    return router.routes();
}