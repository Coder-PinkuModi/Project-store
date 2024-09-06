import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
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
  },
  { timestamps: true },
);

const admin= mongoose.model("admin",adminSchema)

export default admin