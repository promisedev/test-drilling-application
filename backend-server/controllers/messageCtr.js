import Msg  from '../model/messageschema.js'

const Message = async (req,res)=> {
    
const message = await req.body
try {  
 const result =   await Msg.create(message)
res.status(201).json({result})
} catch (error) {
    console.log(error)
    res.sendStatus(400)
}



}

export default Message