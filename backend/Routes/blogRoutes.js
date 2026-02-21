import express from "express";
import { getBlogs, createBlogs, getBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";

const router = express.Router()

router.route("/")
    .get(getBlogs)
    .post(createBlogs)

router.route("/:id")
    .get(getBlog)
    .put(updateBlog)
    .delete(deleteBlog)


export default router;