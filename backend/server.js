import express from "express";
import dotenv from "dotenv";
import run from "./dbConn.js";
import blogPosts from "./Routes/blogRoutes.js";
import userRoute from "./Routes/userRoutes.js"
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;


app.set("view engine", "ejs");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.status(200).json("api running..");
})

app.get("/crud", (req, res)=>{
    res.render("home")
})
app.get("/create", (req, res)=>{
    res.render("create")
})
app.get("/read", (req, res)=>{
    res.render("read")
})
app.get("/update", (req, res)=>{
    res.render("update")
})

const startServer = async () => {
    await run()
    app.use("/blogs", blogPosts)
    app.use("/users", userRoute)

    app.listen(port, () => {
        console.log("app running on port", port);
    })
}

startServer();