
const Routine = require("../models/Routine.model")


const getAllRoutines = (req, res, next) => {

    Routine
        .find()
        .sort({ title: 1 })
        .select({ title: 1, training: 1, owner: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneRoutine = (req, res, next) => {

    const { id: routine_id } = req.params

    Routine
        .findById(routine_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const createRoutine = (req, res, next) => {

    const routine = {
        title, description, training, exercises =  req.body.inputList
    } = req.body.routineData

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
    getOneRoutine,
    createRoutine,
    deleteRoutine

}
