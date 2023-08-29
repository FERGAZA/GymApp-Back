
const router = require('express').Router()

router.use("/routines", require('./routines.routes'))

router.use("/auth", require('./auth.routes'))

module.exports = router
