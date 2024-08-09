import express from "express"
import { loginUser, signupUser } from "../controllers/userController.js"

const userRoouter = express.Router()

userRoouter.post("/signup", signupUser)
userRoouter.post("/login", loginUser)

export default userRoouter;