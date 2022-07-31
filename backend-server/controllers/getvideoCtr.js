
import videos from "../model/videoschema.js";


const GetVideoCtr = async(req,res)=>{

const video = await videos.find()
if(!video) return res.sendStatus(204)

res.status(200).json(video)
}
 
export default GetVideoCtr
