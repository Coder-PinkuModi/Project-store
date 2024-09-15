import express from "express"
import { createUser } from "../../controllers/authControllers.js"

const routes = express.Router()

routes.post("/signUp", createUser)
routes.post("/login")


export default routes;