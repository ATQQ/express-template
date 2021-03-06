module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 'off',
    // 在使用不同的编辑器、VCS应用程序和操作系统时，使用的换行操作不一样时需要配置
    // 'off' or 0 关闭规则
    // 'warn' or 1 将规则视为一个警告(不会影响退出码)
    // 'error' or 2 将规则视为一个错误(退出码为1)
    'no-console': 'off',
    semi: ['error', 'never'],
  },
}
