import express from "express";
import { getBlogs, createBlogs, getBlog, updateBlog, deleteBlog } from "../controllers/blogController.js";
import requireAuth from "../middlewares/requireAuth.js"

const router = express.Router()

router.use(requireAuth) // to req auth for all blog routes

router.route("/")
    .get(getBlogs)
    .post(createBlogs)

router.route("/:id")
    .get(getBlog)
    .put(updateBlog)
    .delete(deleteBlog)


export default router;