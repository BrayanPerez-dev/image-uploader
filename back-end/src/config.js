import { config } from "dotenv";
config()
export default {
    MONGODB_URI: process.env.MONGODB_URI,
    PORT:process.env.PORT || 4000,
    CLOUD_NAME:process.env.CLOUD_NAME,
    API_KEY:process.env.API_KEY,
    API_SECRET:process.env.API_SECRET,
}  