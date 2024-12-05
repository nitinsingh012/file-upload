const cloudinary = require("../utils/cloudinaryConfig")
const streamify = require("streamifier")

const upload = (file)=>{
    return new Promise((resolve,reject)=>{
        let stream = cloudinary.uploader.upload_stream(
            {
                folder : "files",
                transformation : [
                    {width:800, height: 800 , crop : 'limit'}
                ]
            },
            (error,result)=>{
           if(error){
            return reject(error)
           }
           else{
            return resolve(result)
           }
        })
        streamify.createReadStream(file.buffer).pipe(stream)
    })
}

module.exports = upload