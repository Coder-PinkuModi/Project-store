import sellerModel from "../models/seller.js";
import argon2 from "argon2";
import validator from "validator";

async function createSeller(req, res) {
  // let's chaeck if seller provided all the necessary details
  const { name, phoneNumber, email, password, reEnterPassword } = req.body;

  if (!name || !phoneNumber || !email || !password || !reEnterPassword) {
    return res.status(400).json({ Error: "All input fields required" });
  }

  // check if email is valid
  if (!validator.isEmail(email)) {
    return res.status(400).json({ Error: "Invalid email format" });
  }

  // check for password entered both times are same or not
  if (password !== reEnterPassword) {
    return res.status(400).json({ Error: "Entered passwords doesn't match" });
  }

  try {
    const sellerEmail = await sellerModel.findOne({ email: email });
    if (sellerEmail)
      return res
        .status(400)
        .json({ Error: "Seller with same email already exists" });

    const sellerPhoneNumber = await sellerModel.findOne({
      phoneNumber: phoneNumber,
    });
    if (sellerPhoneNumber)
      return res
        .status(400)
        .json({ Error: "Seller with same phone number already exists" });

    // Now if both of them doesn't exist then we can create a new seller
    const hashPassword = await argon2.hash(password);

    // once password hashed now we can create a new seller with the same hashed password
    await sellerModel.create({
      //storing the data in the database
      name,
      phoneNumber,
      email,
      password: hashPassword,
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

async function loginSeller(req, res) {
  const { email, password } = req.bpdy;
  if (!email || !password) {
    return res.status(400).json({ Error: "All input fields required" });
  }

  try {
    const seller = await sellerModel.finOne({ email: email });
    if (!seller) return res.statur(400).json({ Error: "Seller does not exist" });

    // verify password

    const validPasswword = await argon2.verify(user.password, password);

    if (!validPasswword)
      return res.status(400).json({ Error: "Incorrect password" });

    res.status(200).json({ message: "User logged in successfully" });
  } catch (err) {
    console.log("error: ", err);
  }
}

export { createSeller, loginSeller };
