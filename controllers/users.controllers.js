const User = require("../models/User.model")



const getAllUsers = (req, res, next) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneUser = (req, res, next) => {

    res.json("He llegado a esta puta ruta One")

}

const editUser = (req, res, next) => {

    res.json("He llegado a esta puta ruta edit")

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