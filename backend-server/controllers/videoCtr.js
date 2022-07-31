import videos from "../model/videoschema.js"

const VideoCtr = async(req,res)=>{
const videoinfo =req.body
try {
 if(!videoinfo) return res.sendStatus(400)
 const result = await videos.create(videoinfo) 
 res.status(200).json(result) 
    
} catch (error) {
    console.log(error)
}

}

export default VideoCtr