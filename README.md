# express-template
express + mongodb Web-Restful开发模板项目

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