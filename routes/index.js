
const router = require('express').Router()

router.use("/routines", require('./routines.routes'))

module.exports = router
