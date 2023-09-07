const router = require("express").Router()

const { verifyToken } = require("../middleware/VerifyToken")

const {
    getAllRoutines,
    getRoutinesByType,
    getOneRoutine,
    getRoutineExercises,
    getRoutinesByOwner,
    deleteRoutine,
    createRoutine
} = require('../controllers/routine.controllers')

router.get("/getAllRoutines", verifyToken, getAllRoutines)

router.get("/getRoutinesByType/:routineType", verifyToken, getRoutinesByType)

router.get("/getOneRoutine/:id", verifyToken, getOneRoutine)

router.get('/getRoutineExercises/:id', verifyToken, getRoutineExercises)


router.get("/getRoutinesByOwner/:id", verifyToken, getRoutinesByOwner)

// router.get("/getRoutinesAssignedToUser/:id", getOneRoutine)

router.post("/createRoutine", verifyToken, createRoutine)

router.post("/deleteRoutine/:id", deleteRoutine)


module.exports = router
