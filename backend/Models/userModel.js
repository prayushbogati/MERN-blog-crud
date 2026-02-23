import mongoose from "mongoose"
import bcrypt from "bcrypt"
import validator from "validator"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})


// static login method
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email }) // this points to database

    if (!email || !password) {
        throw Error("Please fill all the fields!")
    }

    if (!user) {
        throw Error("User does not exist!")
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error("Incorrect password!")
    }
    
    return user
}

// static signup method
userSchema.statics.signup = async function (email, password) {
    const exists = await this.findOne({ email }) // this points to database

    if (!email || !password) {
        throw Error("Please fill all the fields!")
    }

    if (!validator.isEmail(email)) {
        throw Error("Invalid email!")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Enter a strong password!")
    }

    if (exists) {
        throw Error("Email already exists!")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

export const userModel = mongoose.model("User", userSchema)