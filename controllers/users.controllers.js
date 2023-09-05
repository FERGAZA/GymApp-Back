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
    const { userData } = req.body

    User
        .findByIdAndUpdate(id, userData)
        .then(response => res.json(response))
        .catch(err => next(err))

}
const deleteUser = (req, res, next) => {

    const { id } = req.params
    console.log(id)
    User
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => next(err))

}


module.exports = {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
}