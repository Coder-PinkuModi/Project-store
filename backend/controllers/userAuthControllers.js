import userModel from "../models/user.js";
import argon2 from "argon2";
import validator from "validator";
import { jwtUserGenerate } from "../utils/authJWTSign.js"

async function createUser(req, res) {
  //First: check if every needed input fields are recieved or not--
  const {
    firstName,
    secondName,
    phoneNumber,
    email,
    password,
    reEnterPassword,
    pincode,
  } = req.body;
  if (
    !firstName ||
    !secondName ||
    !phoneNumber ||
    !email ||
    !password ||
    !reEnterPassword ||
    !pincode
  ) {
    return res.status(400).json({ Error: "All input fields required" });
  }

  // check if email recieved is valid or not
  if (!validator.isEmail(email)) {
    return res.status(400).json({ Error: "Invalid email format" });
  }

  // check if the password and reEnterpassword is equal or not
  if (password !== reEnterPassword)
    return res
      .status(400)
      .json({ Error: "Passwords entered do not match, please fill again !" });

  try {
    // check whether provided email or phone number does exist in database or not
    const existingUserEmail = await userModel.findOne({ email: email });
    if (existingUserEmail)
      return res.status(400).json({ Error: "Email is already in use" });
    const existingUserPhoneNumber = await userModel.findOne({
      phoneNumber: phoneNumber,
    });
    if (existingUserPhoneNumber)
      return res.status(400).json({ Error: "Number is already in use" });

    // hash password
    const hashedPassword = await argon2.hash(password);

    // Create new user
    await userModel.create({
      // storing data in MongoDb
      firstName,
      secondName,
      phoneNumber,
      email,
      password: hashedPassword,
      pincode,
    });
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log("error:", err);
  }
}

async function loginUser(req, res) {
  const { email, password } = req.bpdy;
  if (!email || !password) {
    return res.status(400).json({ Error: "All input fields required" });
  }

  try{

    const user= await userModel.finOne({email:email})
    if(!user) return res.statur(400).json({Error:"User does not exist"})

    // verify password
    
    const validPasswword= await argon2.verify(user.password, password)

    if(!validPasswword) return res.status(400).json({Error:"Incorrect password"})

    const jwtToken= jwtUserGenerate(user.id, user.email)

    res.cookie("userToken", jwtToken, {
      maxAge: 7*24*60*60*1000,
      httpOnly: true
    })

    return res.status(200).json({message:"User logged in successfully"})
  } catch(err){
    console.log("error: ",err)
  }
  
}

async function logoutUser(req, res) {
  res.status(200).json({ message: "User logged out successfully" });
}

export { createUser, loginUser };
