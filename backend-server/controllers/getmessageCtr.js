import Msg from "../model/messageschema.js";

const GetMessages = async(req,res)=>{

  const result = await Msg.find()
  if(!result) return res.sendStatus(204) 
  res.status(200).json(result) 
}

export default GetMessages