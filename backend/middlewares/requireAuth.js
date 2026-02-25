import jwt from "jsonwebtoken"
import { userModel } from "../Models/userModel.js"

const requireAuth = async (req, res, next) => {

    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ err: "Authorization token required!" })
    }

    const token = authorization.split(" ")[1]

    try {
        const { _id } = jwt.verify(token, process.env.SECRET)

        req.user = await userModel.findOne({ _id }).select('_id')
        console.log(req.user._id);

        next()
    }
    catch (err) {
        console.log(err);
        res.status(401).json({ err: "Request is not authorized!" })
    }
}

export default requireAuth