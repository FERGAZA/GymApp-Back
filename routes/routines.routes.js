const router = require("express").Router()

const { verifyToken } = require("../middleware/VerifyToken")

const {
    getAllRoutines,
    getOneRoutine,
    getRoutinesByOwner,
    deleteRoutine,
    createRoutine
} = require('../controllers/routine.controller')

router.get("/getAllRoutines", verifyToken, getAllRoutines)

router.get("/getOneRoutine/:id", verifyToken, getOneRoutine)

router.get("/getRoutinesByOwner/:id", verifyToken, getRoutinesByOwner)

// router.get("/getRoutinesAssignedToUser/:id", getOneRoutine)

router.post("/createRoutine", verifyToken, createRoutine)

router.post("/deleteRoutine/:id", deleteRoutine)

module.exports = router
