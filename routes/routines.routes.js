const router = require("express").Router()

const { verifyToken } = require("../Middleware/VerifyToken")

const {
    getAllRoutines,
    getOneRoutine,
    saveRoutine,
    deleteRoutine
} = require('../controllers/routine.controllers')

router.get("/getAllRoutines", getAllRoutines)

router.get("/getOneRoutine/:id", getOneRoutine)

router.post("/saveRoutine", saveRoutine,)

router.post("/deleteRoutine/:id", deleteRoutine)

module.exports = router
