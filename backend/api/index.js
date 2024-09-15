import express from "express"
import routerAuth from "../routes/dynamic/auth.js";
import mongoDBConnect from "../config/db.js";

const port =3000
const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoDBConnect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10");

app.get("/",(req,res)=>{
    return res.status(200).json("Server running")
})

app.use("/api/auth",routerAuth) // route to signUp and Login post request


app.listen(port,()=>console.log(`Server started at port ${port}`));