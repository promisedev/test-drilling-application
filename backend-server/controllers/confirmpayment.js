
import Flutterwave from 'flutterwave-node-v3';
import jwt from 'jsonwebtoken' 
import Users from '../model/userschema.js';

const ConfirmPayment = async (req,res)=> {
 const {p_status,tx_ref,transaction_id}= req.body 
 //console.log(p_status,tx_ref,transaction_id)
try {
    const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);
flw.Transaction.verify({ id: transaction_id })
    .then(async(response) => {
        //console.log(response)
        if (
            response.data.status === "successful"
            && response.data.currency === 'NGN') {
            // Success! Confirm the customer's payment
let plan;
let expire;
if(response.data.amount ===2100){plan='basic'; expire='90d'}else
if(response.data.amount ===3600){plan='premium'; expire='180d'}else
if(response.data.amount ===6000){plan='pro'; expire='360d'}
const user_email = response.data.customer.email;
const user = await Users.findOne({email:user_email}).exec()
   
if(!user) return res.sendStatus(403)
const token = jwt.sign({id:user._id,email:user.email},process.env.SUB_SECRET,{expiresIn:expire})

const token_info = jwt.verify(token,process.env.SUB_SECRET)
const expire_time = new Date(token_info.exp*1000)
const expire_by = expire_time.toString()
const expire_date = expire_by.substring(0,15)

await Users.findByIdAndUpdate(user._id,{sub_token:token,sub_plan:plan,plan_expiry:expire_date,issubscribed:true},{useFindAndModify:false})
 res.status(200).json({response,plan})
        } else {
            // Inform the customer their payment was unsuccessful
            res.status(400).json("payment unsuccessful")
        }
    })
    .catch((err)=>console.log(err));
} catch (error) {
    console.log(error)
}
    
}


export default ConfirmPayment