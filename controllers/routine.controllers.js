
const Routine = require("../models/Routine.model")


const getAllRoutines = (req, res, next) => {

    Routine
        .find()
        // TODO RPOYECTAR
        // TODO ORDENAR
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

const saveRoutine = (req, res, next) => {

    const { title, description, exercises } = req.body;

    Routine
        .create({ title, description, exercises })
        .then(routine => {
            res.status(201).json({ message: 'Routine saved successfully', routine });
        })
        .catch(error => {
            // TODO: RESOLVER TODOS LOS CATCH CON next(error)
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
