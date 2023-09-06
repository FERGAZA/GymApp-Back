const { Schema, model } = require("mongoose");

const productsSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        brand: {
            type: String,
            required: [true, 'Brand is required'],
        },

        image: {
            type: String,
            default: 'https://res.cloudinary.com/daqyvggzm/image/upload/v1693861204/hhrqpvubpdk4ykj6s3ec.png'
        },

    },
    {
        timestamps: true
    }
);

const products = model("Product", productsSchema);

module.exports = products;
