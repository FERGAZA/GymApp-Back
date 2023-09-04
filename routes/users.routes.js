const router = require("express").Router()

const {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
} = require('../controllers/users.controllers.js')

router.get("/getAllUsers", getAllUsers)

router.get("/getOneUser/:id", getOneUser)

router.post("/editUser/:id", editUser)

router.post("/deleteUser/:id", deleteUser)


module.exports = router