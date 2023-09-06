const User = require("../models/User.model")

const getAllUsers = (req, res, next) => {

    User
        .find()
        .sort({ firstname: 1 })
        .select({ firstname: 1, lastname: 1, chest: 1, squad: 1, routine: 1, weigth: 1, products: 1, avatar: 1, role: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneUser = (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .populate("gymbro", "Products")
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

    User
        .findByIdAndDelete(id)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    getOneUser,
    editUser,
    deleteUser
}