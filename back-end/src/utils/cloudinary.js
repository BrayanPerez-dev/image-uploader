import cloudinary from "cloudinary"
import config from "../config"

cloudinary.config({
    cloud_name: config.CLOUD_NAME,
    api_key: config.API_KEY,
    api_secret: config.API_SECRET,
})

export default cloudinary