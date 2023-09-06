
const Routine = require("../models/Routine.model")


const getAllRoutines = (req, res, next) => {

    Routine
        .find()
        .then(response => setTimeout(() => res.json(response), 1000))
        .catch(err => next(err))

}

const getOneRoutine = (req, res, next) => {

    const { id: routine_id } = req.params
    Routine
        .findById(routine_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const saveRoutine = (req, res, next) => {

    const { title, description, exercises } = req.body;

    const isValidExercises = exercises.every(exercise => {
        return exercise.name && exercise.reps >= 4 && exercise.reps <= 15;
    });

    if (!isValidExercises) {
        return res.status(400).json({ error: 'Invalid exercise data' });
    }

    const newRoutine = new Routine({
        title,
        description,
        exercises
    });

    newRoutine
        .save()
        .then(savedRoutine => {
            res.status(201).json({ message: 'Routine saved successfully', routine: savedRoutine });
        })
        .catch(error => {
            res.status(500).json({ error: 'Failed to save routine' });
        });

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
        .catch(error => {
            res.status(500).json({ error: 'Failed to delete routine' });
        })
}


module.exports = {
    getAllRoutines,
    getOneRoutine,
    saveRoutine,
    deleteRoutine

}
