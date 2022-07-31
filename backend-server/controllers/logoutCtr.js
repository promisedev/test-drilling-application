import jwt from 'jsonwebtoken'
import User from '../model/userschema.js';

const Logout = async (req,res)=>{
  const cookies = req.cookies;
  if(!cookies?.refresh_token) return res.sendStatus(204);
const refresh_token = cookies.refresh_token

// check if user exist
const user = await User.findOne({refresh_token:refresh_token}).exec()
if(!user) {
   res.clearCookie('refresh_token',{httpOnly:true, maxAge: 24*60*60*1000}) 
    return res.sendStatus(204)
}

// delete refresh token from db
await User.findByIdAndUpdate(user._id,{refresh_token:''},{useFindAndModify:false})

// clear refresh token
res.clearCookie('refresh_token',{httpOnly:true, maxAge: 24*60*60*1000})
res.sendStatus(204)

}

export default Logout