import mongoose from "mongoose"
import config from "./config"

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then((db) => console.log("DB is connected"))
    .catch((error) => console.log(error))