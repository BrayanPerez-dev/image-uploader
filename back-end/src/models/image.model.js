import { Schema, model } from "mongoose";

const imageSchema = new Schema({
    image: {
        type: String,
        require: true
    },
    cloudinary_id: {
        type: String,
        require: true
    },
},
    {
        versionKey: false
    }
)

export default model("Image", imageSchema)