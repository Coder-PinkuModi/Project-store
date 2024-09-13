import express from "express"
import mongoDBConnect from "../config/db.js";

const port =3000
const app= express()

mongoDBConnect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.10");


app.listen(port,()=>console.log(`Server started at port ${port}`));