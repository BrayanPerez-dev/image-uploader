import {Router} from "express"
const router = Router()
import {uploadImage} from "../controllers/image.controller"
import upload from "../utils/multer"

router.post("/",upload.single("image"),uploadImage)

export default router