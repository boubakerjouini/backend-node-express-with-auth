const express = require('express')
const router = express.Router()
const users = require('./users/user')

router.use('/users', users)

module.exports = router
