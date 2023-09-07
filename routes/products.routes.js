
const router = require("express").Router()

const {
    getAllProducts,
    getOneProduct,
    deleteProduct,
    sendProduct,
    removeProduct

} = require('../controllers/products.controller.js')
const { verifyToken } = require("../middleware/VerifyToken.js")


router.get("/products", verifyToken, getAllProducts)

router.get("/products/:id", verifyToken, getOneProduct)

router.put("/sendProduct/:id", verifyToken, sendProduct)

router.put("/removeProduct/:id", verifyToken, removeProduct)

router.delete("/deleteproduct/:id", deleteProduct)

module.exports = router
