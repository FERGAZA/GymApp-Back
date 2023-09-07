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
        .populate("gymbro")
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getUserInfo = (req, res, next) => {

    const { filter, user_id } = req.params
    User
        .findById(user_id)
        .populate(filter)
        .select({ filter: 1 })
        .then((response) => res.json(response))
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


const addGymbro = (req, res, next) => {

    const { userId } = req.body
    const { _id } = req.payload


    User
        .findByIdAndUpdate(_id, { $addToSet: { gymbro: userId } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}


const deleteUser = (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const deleteGymbro = (req, res, next) => {

    const { userId } = req.body
    const { _id } = req.payload
    User
        .findByIdAndUpdate(_id, { $pull: { gymbro: userId } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    getOneUser,
    editUser,
    addGymbro,
    deleteUser,
    getUserInfo,
    deleteGymbro
}