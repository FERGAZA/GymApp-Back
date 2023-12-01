const router = require("express").Router()

const {
    getAllUsers,
    getOneUser,
    editUser,
    addGymbro,
    deleteGymbro,
    getUserInfo,
    deleteUser
} = require('../controllers/users.controllers.js')

const { verifyToken } = require("../middleware/VerifyToken.js")

router.get("/getAllUsers", getAllUsers)

router.get("/getOneUser/:id", getOneUser)

router.get("/getUserInfo/:filter/:user_id", getUserInfo)

router.post("/editUser/:id", editUser)

router.put("/addGymbro", verifyToken, addGymbro)

router.put("/deleteGymbro", verifyToken, deleteGymbro)


router.post("/deleteUser/:id", deleteUser)



module.exports = router