import jwt from 'jsonwebtoken' 
import User from '../model/userschema.js';

const Refresh = async (req,res)=>{
  const cookies = req.cookies;
  if(!cookies?.refresh_token) return res.sendStatus(401);
const refresh_token = cookies.refresh_token

// check if user exist
const user = await User.findOne({refresh_token:refresh_token}).exec()
if(!user) return  res.sendStatus(403)

const {_id,email, first_name,last_name} =user
// verify the refresh token

const result = await jwt.verify(refresh_token,process.env.REFRESH_TOKEN_SECRET)

// check if found user.username and result.username are the same

if(user.email !== result.email) return res.send(403)

// create new access token
const accesstoken = await jwt.sign({_id,email,first_name,last_name},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})

res.status(200).json({token:accesstoken, id:user._id })

}

export default Refresh