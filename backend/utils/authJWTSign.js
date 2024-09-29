// in this we will make a function that will generate jwt tokens for the user and the other function to verify the user token recieved from the request

import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const jwtUserGenerate= async (payload) => {
     const token= jwt.sign(payload,process.env.JWT_SECRET, {expiresIn: "7d"},(err,token)=>{
        if(err) console.log(err)
        else console.log(token)
    })
    return token
}