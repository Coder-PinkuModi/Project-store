const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true, // Ensure that each phone number is unique
      // match: [/^\d{10}$/, 'Please provide a valid 10-digit phone number'], // Validates the phone number format
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure the email is unique
      // match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'], // Validates email format
    },
    password: {
      type: String,
      required: true,
    },
    numberIsVerified: {
      type: Boolean,
      default: false,
    },
    emailIsVerified: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Seller = mongoose.model("Seller", sellerSchema);

export default Seller;
