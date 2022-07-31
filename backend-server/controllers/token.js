
const sendAccesstoken = (res,req,access_token)=>{
    res.send({token:access_token, email:req.body.username, message:"logged in successfuly" }) //sending acces_token as response

}

const sendRefreshtoken = (res,req,refresh_token)=>{
    res.cookie('refresh_token', refresh_token,{httpOnly:true,  path:'/refresh_token'}) //secure:true, saving refresh_token as a httpOnly cookie

}

export  {sendAccesstoken,sendRefreshtoken}


