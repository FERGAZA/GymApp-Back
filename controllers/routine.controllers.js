
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

    const { title, description, training } = req.body.routineData
    const list = req.body.inputList

    const routine = {
        title,
        description,
        training,
        exercises: list,
    }

    Routine
        .create(routine)
        .then(routine => {
            res.status(201).json({ message: 'Routine saved successfully', routine });
        })
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
            res.status(200).json({ message: 'Routine deleted successfully', deletedRoutine });
        })
        .catch(err => next(err))
}


module.exports = {
    getAllRoutines,
    getOneRoutine,
    createRoutine,
    deleteRoutine

}
