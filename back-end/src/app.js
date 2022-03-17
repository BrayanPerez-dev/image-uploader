import express from "express"
import cors from "cors"
import helmet from "helmet"
import pkg from "../package.json"
import imageRoute from "./routes/image.route"

const app = express()

app.set("pkg", pkg);
app.set("port", process.env.PORT || 4000);
app.set("json spaces", 4);
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my image uploader API",
        name: app.get("pkg").name,
        version: app.get("pkg").version,
        description: app.get("pkg").description,
        author: app.get("pkg").author
    })
})

app.use("/api/upload", imageRoute)
export default app