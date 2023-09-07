
const Routine = require("../models/Routine.model")
const exerciseService = require("../services/exercise.services")


const getAllRoutines = (req, res, next) => {

    Routine
        .find()
        .populate('owner')
        .sort({ title: 1 })
        .select({ title: 1, training: 1, owner: 1, _id: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getRoutinesByType = (req, res, next) => {
    const { routineType } = req.params

    Routine
        .find({ training: routineType })
        .populate('owner')
        .sort({ title: 1 })
        .select({ title: 1, training: 1, owner: 1, _id: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const getRoutinesByOwner = (req, res, next) => {

    const { id: user_id } = req.params

    Routine
        .find({ owner: user_id })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneRoutine = (req, res, next) => {

    const { id: routine_id } = req.params

    Routine
        .findById(routine_id)
        .populate('owner')
        .select({ title: 1, description: 1, owner: 1, exercises: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getRoutineExercises = (req, res, next) => {
    const { id: routine_id } = req.params

    Routine
        .findById(routine_id)
        .select({ exercises: 1, _id: 0 })
        .then(response => {
            let exercisesProm = response.exercises.map(({ properties }) => {
                return exerciseService.searchExerciseById(properties.id).then(({ data }) => data)
            })
            return Promise.all(exercisesProm)
        })
        .then(response => res.json(response))
        .catch(err => next(err))


}
const createRoutine = (req, res, next) => {
    const { title, description, training, owner, exercises } = req.body

    let newExercises = []

    for (const [_, value] of Object.entries(exercises)) {
        newExercises.push({ properties: value })
    }

    const routine = {
        title,
        description,
        training,
        owner,
        exercises: newExercises

    }

    Routine
        .create(routine)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const deleteRoutine = (req, res, next) => {

    const { routine_id } = req.params;

    Routine
        .findByIdAndDelete(routine_id)
        .then(deletedRoutine => {
            if (!deletedRoutine) {
                return res.status(404).json({ error: 'Routine not found' });
            }
            res.sendStatus(204)
        })
        .catch(err => next(err))
}


module.exports = {
    getAllRoutines,
    getRoutinesByType,
    getRoutinesByOwner,
    getOneRoutine,
    getRoutineExercises,
    createRoutine,
    deleteRoutine


}
