import express from "express"

const app = express()

export const authCheck = (req, res, next) => {
    if(req.cookie?.user){
        next()
    }else{
        res.redirect("/login")
    }
}