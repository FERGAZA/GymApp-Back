const User = require("../models/User.model")



const getAllUsers = (req, res, next) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneUser = (req, res, next) => {

    const { id } = req.params
    User
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const editUser = (req, res, next) => {

    const { id } = req.params
    User
        .findByIdAndUpdate(id)
        .then(responde => res.json(response))
        .catch(err => next(err))

}
const deleteUser = (req, res, next) => {

    res.json("He llegado a esta puta ruta delete")

}


module.exports = {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
}