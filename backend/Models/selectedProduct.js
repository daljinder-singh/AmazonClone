const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    product_id: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    total_price: {
        type: String,
        required: true,
    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register'
      },
    date: {
        type: Date,
        default: Date.now,
      },
})
module.exports = mongoose.model('selectedProduct', productsSchema, "selectedProduct")