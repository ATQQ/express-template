const crypto = require('crypto')

/**
 * 加密字符串(md5+base64)
 * @param str 待加密的字符串
 */
function encryption(str) {
  return crypto.createHash('md5').update(str).digest('base64')
}

/**
 * 小驼峰转下划线
 * @param {string} word 待转换字符
 */
function lowCamel2Underscore(word) {
  const letters = word.split('')
  return letters.reduce((pre, letter) => pre + (/[A-Z]/.test(letter) ? `_${letter.toLowerCase()}` : letter), '')
}

module.exports = {
  encryption,
  lowCamel2Underscore,
}
