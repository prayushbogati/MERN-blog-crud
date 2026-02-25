import blogModel from "../Models/blogModel.js"
import mongoose from "mongoose"

// get blogs
const getBlogs = async (req, res) => {
    try {
        const user_id = req.user._id // id from the users collection
        const items = await blogModel.find({user_id}).sort({ createdAt: -1 })

        res.status(200).json(items);

    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// get blogs by id
const getBlog = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such data" })
        }
        const item = await blogModel.findById(id)
        if (!item) {
            return res.status(200).json({ msg: "empty" })
        }
        res.status(200).json(item)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// post blogs
const createBlogs = async (req, res) => {
    const { author, title, body } = req.body;

    const user_id = req.user._id

    let emptyFields = []

    if (!author) {
        emptyFields.push('author')
    }
    if (!title) {
        emptyFields.push('title')
    }
    if (!body) {
        emptyFields.push('body')
    }

    if (emptyFields.length > 0) {
        return res.status(404).json({ error: "Please fill all the fields", emptyFields })
    }

    try {
        const items = await blogModel.create({
            author,
            title,
            body,
            user_id
        })
        res.status(201).json(items);
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// update blog
const updateBlog = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ err: "item with that id does not exist!" })
        }
        const item = await blogModel.findByIdAndUpdate(id, { ...req.body }) // spreading req.body as it is an object
        if (!item) {
            return res.status(404).json({ msg: "empty" })
        }
        res.status(200).json({ message: "items updated", data: item })
    }
    catch (err) {
        res.status(500).json({ err: err.message })
    }
}

const deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "no such data" })
        }
        const item = await blogModel.findByIdAndDelete(id)
        if (!item) {
            return res.status(404).json({ msg: "empty" })
        }
        res.status(200).json(item)
    }
    catch (err) {
        res.status(500).json({ err: err.message })
    }
}

export {
    getBlogs,
    createBlogs,
    getBlog,
    updateBlog,
    deleteBlog
}