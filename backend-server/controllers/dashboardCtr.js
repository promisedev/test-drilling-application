import User from "../model/userschema.js";


const Dashboard = async (req,res)=>{
const user_id = req.params.id
const user = await User.findOne({_id:user_id})
if(!user) return res.status(201).json(`no user found with id:${user_id}`)

res.status(200).json({user})
} 

export default Dashboard

