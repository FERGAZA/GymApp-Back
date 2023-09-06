const Products = require("../models/Products.model")
const User = require("../models/User.model")

const getAllProducts = (req, res, next) => {

    Products
        .find()
        .sort({ name: 1 })
        .select({ name: 1, brand: 1, image: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneProduct = (req, res, next) => {

    const { id } = req.params

    Products
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const sendProduct = (req, res, next) => {

    const { user_id } = req.payload
    const { id: product_id } = req.params

    User
        .findByIdAndUpdate(user_id, { $push: { products: product_id } })
        .then(response => console.log(response))
        .catch(err => next(err))
}


const deleteProduct = (req, res, next) => {

    const { id } = req.params

    Products
        .findByIdAndDelete(id)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

module.exports = {
    getAllProducts,
    getOneProduct,
    deleteProduct,
    sendProduct
}