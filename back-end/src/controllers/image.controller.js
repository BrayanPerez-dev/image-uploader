import Image from '../models/image.model'
import cloudinary from '../utils/cloudinary'

export const uploadImage = async (req,res) => {
   try {
    const file = await cloudinary.v2.uploader.upload(req.file.path,{folder:"test"})
    const image = new Image({
        image:file.secure_url,
        cloudinary_id:file.public_id
    })
   
    await image.save()
    return res.status(200).json({url:image.image})
   } catch (error) {
    return res.status(400).json({error:error.message})
   }
}