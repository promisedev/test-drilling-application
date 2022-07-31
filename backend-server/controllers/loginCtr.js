import User  from '../model/userschema.js'
import Msg  from '../model/messageschema.js'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt  from 'jsonwebtoken'
 


const Login = async (req,res) =>{ 
const {username,password} = await req.body;
//console.log(req.body); 
try {  
    if(!username || !password) return res.status(400).json("please provide username and password!")   
const isUser = await User.findOne({email:username}).exec()
// CHECKING IF USER EXIST
if(!isUser)return res.status(404).json("user does not exist!")
const{_id,email,first_name,last_name}= isUser
    // CHECKING IF PASSWORD IS CORRECT
 const ispassword = await bcrypt.compare(password,isUser.password);
 if(!ispassword) return res.status(401).json("invalid username or password!")  

const access_token = await jwt.sign({_id,email,first_name,last_name},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'});

const refresh_token = await jwt.sign({_id,email,first_name,last_name},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'});
// saving refresh token to the database
const result = await User.findByIdAndUpdate(_id,{refresh_token:refresh_token},{useFindAndModify:false});

res.cookie('refresh_token', refresh_token,{httpOnly:true, maxAge:24*60*60*1000}) //, saving refresh_token as a httpOnly cookie
//res.status(200) 
//.json({message:"logged in successfuly"})
res.json({token:access_token, id:_id, message:"logged in successfuly" }) //sending acces_token as response
 
} catch (error) {
res.status(400).json({error}) 
   //console.log(error);
}
     
} 
 
export default Login