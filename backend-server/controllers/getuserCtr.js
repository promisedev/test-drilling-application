import users from "../model/userschema.js";


const GetUserCtr = async(req,res)=>{
const id = req.params.id;

try {
 const result = await users.findOne({email:id}).exec()
 if(!result) return res.sendStatus(400)   

 res.status(200).json(result)
} catch (error) {
    console.log(error)
}

}

export default GetUserCtr


