import mongoose from "mongoose";

const userScehma = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    secondName: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      unique:true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
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

    pincode: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
  },
  
  },
  { timestamps: true }
);

const User= mongoose.model("User",userScehma)

export default User