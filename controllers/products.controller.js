const Product = require("../models/Product.model")
const User = require("../models/User.model")

const getAllProducts = (req, res, next) => {

    Product
        .find()
        .sort({ name: 1 })
        .select({ name: 1, brand: 1, image: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneProduct = (req, res, next) => {

    const { id } = req.params

    Product
        .findById(id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const sendProduct = (req, res, next) => {

    const { _id: user_id } = req.payload
    const { id: product_id } = req.params

    User
        .findByIdAndUpdate(user_id, { $addToSet: { products: product_id } })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const removeProduct = (req, res, next) => {
    console.log("PARAMS BACK---", req.params)
    console.log("PARAMS BACK---", req.payload)

    const { _id: user_id } = req.payload;
    const { id: product_id } = req.params;

    User.
        findByIdAndUpdate(user_id, { $pull: { products: product_id } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err));
};


const deleteProduct = (req, res, next) => {

    const { id } = req.params

    Product
        .findByIdAndDelete(id)
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

module.exports = {
    getAllProducts,
    getOneProduct,
    deleteProduct,
    sendProduct,
    removeProduct,
}