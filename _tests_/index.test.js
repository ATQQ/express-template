const {encryption,lowCamel2Underscore} = require('./../src/utils/stringUtil')

test('encode 66666 = rotaomo64xYS7sHR9v+86Q==', () => {
  expect(encryption('66666')).toBe('rotaomo64xYS7sHR9v+86Q==')
})

test('transfer username -> username',()=>{
  expect(lowCamel2Underscore('username')).toBe('username')
})

test('transfer peopleName -> people_name',()=>{
  expect(lowCamel2Underscore('peopleName')).toBe('people_name')
})