import { userModel } from "../Models/userModel.js";
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

dotenv.config()

//creating a jwt token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: '3d' })
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.login(email, password)

        const token = createToken(user._id)
        res.status(200).json({ email, token })
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
}


const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.signup(email, password)

        const token = createToken(user._id)
        res.status(200).json({ email, token })
    }
    catch (err) {
        res.status(400).json({ err: err.message })
    }
}

export { login, signup }