
import videos from "../model/videoschema.js";

const GetSingleVideoCtr = async(req,res)=>{
const id = req.params.id
if(id ==='') return res.sendStatus(400)
try {
 const result = await videos.findById(id).exec()
if(!result) return res.sendStatus(204)
res.status(200).json(result)   
} catch (error) {
    console.log(error)
}
 

}

export default GetSingleVideoCtr