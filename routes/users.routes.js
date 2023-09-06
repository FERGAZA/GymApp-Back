const router = require("express").Router()

const {
    getAllUsers,
    getOneUser,
    editUser,
    addGymbro,
    deleteUser
} = require('../controllers/users.controllers.js')
const { verifyToken } = require("../middleware/VerifyToken.js")

router.get("/getAllUsers", getAllUsers)

router.get("/getOneUser/:id", getOneUser)

router.post("/editUser/:id", editUser)


router.put("/addGymbro", verifyToken, addGymbro)

router.post("/deleteUser/:id", deleteUser)


module.exports = router