const router = require("express").Router()

const { verifyToken } = require("../Middleware/VerifyToken")

const {
    getAllRoutines,
    getOneRoutine,
    deleteRoutine,
    createRoutine
} = require('../controllers/routine.controller')

router.get("/getAllRoutines", getAllRoutines)

router.get("/getOneRoutine/:id", getOneRoutine)

router.post("/createRoutine", verifyToken, createRoutine)

router.post("/deleteRoutine/:id", deleteRoutine)

module.exports = router
