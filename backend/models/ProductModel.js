const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true,

    },

    price: {
        type: Number,
        min: 0,
        required: true
    },
    stock: {
        type: Number,
        min:0,
        required: true
    }
})

module.exports = mongoose.model("Product", ProductModel);