
const router = require("express").Router()
const { verifyToken } = require("../middleware/VerifyToken")


const {
    signUp,
    logIn,
    verify
} = require('../controllers/auth.controllers')



router.post("/signUp", signUp)

router.post("/login", logIn)

router.get("/verify", verifyToken, verify)


module.exports = router
