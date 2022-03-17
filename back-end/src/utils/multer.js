import multer from "multer"
import path from "path"

const uploadFile = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            cb(new Error("File type is not supported"))
            return
        }
        cb(null, true)
    }
})

export default uploadFile
