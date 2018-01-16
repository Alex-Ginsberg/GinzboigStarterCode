/*
  Use this file to set up your api routes
  i.e. router.use('/users', require('./users'))
*/

const router = require('express').Router()
module.exports = router

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
