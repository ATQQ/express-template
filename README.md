# express-template
express + mongodb/mysql Web-Restful开发模板项目

## 使用
>如果没有yarn,请先[安装](#yarn简单使用)

1. 安装依赖
```sh
yarn install
```

2. 开发环境运行
```
yarn dev
```

3. 生产环境运行
```
yarn start
```

4. 格式化代码
```
yarn lint
```

5. 跑测试
```
yarn test
```


## 目录介绍
```sh
src
├── app.js              # 应用入口文件
├── config              # 存放各种配置信息文件
│   └── index.js
│
├── constants           # 常量
│   └── index.js
│
│
├── db                  # 数据库相关
│   ├── modules         # 对数据的各种直接操作
│   │   └── userDb.js   
│   │
│   ├── mongodb.js      # 封装mongodb的基本操作
│   └── mysql.js        # 封装mysql的基本操作
│
│
├── routes              # 路由
│   ├── index.js        # 对外统一暴露
│   └── modules         # 各个模块子路由
│       ├── demo.js
│       └── test.js
└── utils               # 工具方法
```
## yarn简单使用
1. 安装
```
npm install --global yarn
```
2. 查看源地址
```
yarn config get registry
```
3. 切换taobao源
```
yarn config set registry https://registry.npm.taobao.org/
```

4. 安装全部依赖
```sh
yarn install
# or
yarn
```

5. 添加包
```sh
# 开发环境依赖
yarn add <packageName> --dev

# 生产环境依赖
yarn add <packageName> --save
```

6. 移除包
```sh
yarn remove <packageName>
```