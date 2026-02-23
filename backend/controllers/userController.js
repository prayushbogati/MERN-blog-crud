import { userModel } from "../Models/userModel.js";

const login = async(req, res) => { res.json({ message: "login" }) }

const signup = async(req, res) => {
    const {email, password} = req.body;

    try{
        const user = await userModel.signup(email, password)

        res.status(200).json(user)
    }
    catch(err){
        res.status(400).json({err: err.message})
    }
}

export { login, signup }