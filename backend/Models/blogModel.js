import mongoose from "mongoose";

const Schema = mongoose.Schema

const blogSchema = new Schema({
    author: {
        type: String,
        required: true,
        trim: true,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
        trim: true,
    }
},
    {
        timestamps: true
    }
);

const MyModel = mongoose.model("Blog", blogSchema);

export default MyModel;
