import User  from '../model/userschema.js'
import Msg  from '../model/messageschema.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const Signup = async (req,res) =>{
const userInfo = await req.body; 
const {country,gender,state, course} = userInfo
const {first_name, last_name, password,email,date_of_birth} = userInfo.userInfo;
const hashpassword = await bcrypt.hash(password,10)
//console.log(hashpassword);
try {     
const isreg = await User.findOne({email:email}).exec()
if(isreg) return res.status(409).json("user already exist!")

     const regUser = await User.create({
        first_name,last_name,password:hashpassword,
date_of_birth,email, course,gender,state,country
     })
    res.status(201).json(regUser)
} catch (error) {
   res.status(400).json({error}) 
   console.log(error);
}
    
} 
 
export default Signup