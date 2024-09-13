import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    productType: {
        type: String,
        required: true,
        enum: ['grocery', 'stationery', 'cosmetics', 'electronics', 'clothing', 'beauty'],
    },
    image: {
        type: String, // This will store the URL of the image
        required: true, // Ensure that every product has an image
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);

export  default Product