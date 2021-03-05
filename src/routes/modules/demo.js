const router = require('express').Router()

const { findUser, selectUserByUsername } = require('../../db/modules/userDb')

router.post('/path2/:id', async (req, res) => {
  // Promise
  findUser().then((data) => {
    console.log(data)

    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
    res.send({
      code: 0,
      errMsg: 'success',
    })
  })
})

router.get('/path2/:id', async (req, res) => {
  // async await
  const data = await findUser()
  console.log(data)

  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  res.send({
    code: 0,
    errMsg: 'success',
  })
})

router.delete('/path2/:id', (req, res) => {
  selectUserByUsername('admin').then((data) => {
    console.log(data)
    console.log(req.params)
    console.log(req.query)
    console.log(req.body)
    res.send({
      code: 0,
      errMsg: 'success',
    })
  })
})

router.put('/path2/:id', async (req, res) => {
  const data = await selectUserByUsername('admin')
  console.log(data)
  console.log(req.params)
  console.log(req.query)
  console.log(req.body)
  res.send({
    code: 0,
    errMsg: 'success',
  })
})

module.exports = {
  prefix: '/demo',
  router,
}
