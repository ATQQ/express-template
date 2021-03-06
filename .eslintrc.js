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
    'linebreak-style': [0, 'off', 'windows'],
    // 在使用不同的编辑器、VCS应用程序和操作系统时，使用的换行操作不一样时需要配置
    'no-console': 'off',
    semi: ['error', 'never'],
  },
}
