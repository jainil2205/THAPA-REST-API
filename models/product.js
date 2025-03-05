const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    featured: { type: Boolean, default: false },
    ratings: { type: Number, default: 0 },
    company: {
        type: String,
        default:true,
    }
});

module.exports = mongoose.model("Product", productSchema);
