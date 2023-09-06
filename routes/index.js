
const router = require('express').Router()

router.use("/auth", require('./auth.routes'))

router.use("/routines", require('./routines.routes'))

router.use("/users", require('./users.routes'))

router.use("/upload", require('./upload.routes'))

router.use("/exercises", require('./exercises.routes'))

router.use("/muscle", require('./muscles.routes'))

router.use("/products", require('./products.routes.js'))


module.exports = router
