import jwt from 'jsonwebtoken'
import User from '../model/userschema.js';
 
const Auth = async(req,res,next)=>{
 const authHeader = req.headers['authorization'] ||req.headers['Authorization']
 
if(!authHeader) return res.sendStatus(401)

// if there is autheader, check is there is access token
const accesstoken = authHeader.split(' ')[1]
if(!accesstoken) return res.sendStatus(401)
// if there is access token, lets verify it

jwt.verify(accesstoken,process.env.ACCESS_TOKEN_SECRET, (err,decoded)=>{
    if(err) return res.sendStatus(403)
req.user =decoded.email

next()
})

}

export default Auth