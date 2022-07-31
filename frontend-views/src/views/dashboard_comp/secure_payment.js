
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LaunchIcon from '@material-ui/icons/Launch';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useGlobalContext } from '../../controller/context_api';
import axios from '../axios';
import Init from '../init_loading'
//import got from 'got'
import Axios from 'axios';
import {v4 as uuid} from 'uuid'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
// -------------------------------------------------

const Secure_payment =()=>{
const FLW_SECRET_KEY ='FLWSECK_TEST-59630fef5700e758141c70f54c956387-X';

const history = useNavigate()
const {isload,setisload} = useGlobalContext()
const name = useParams().id
const [amount,setamount] =  useState('')
const [tag,settag] =  useState('')
const Name = name.substring(0,1).toUpperCase() + name.substring(1,10)
const Amount =amount.substring(0,1) +','+ amount.substring(1,10)+'.00'
useEffect(()=>{
if(name==='basic'){setamount('2100');settag('jaex_basic')}else
if(name==='premium'){setamount('3600');settag('jaex_premium')}else
if(name==='pro'){setamount('6000');settag('jaex_pro')}
},[])

const Cancel = ()=>{
history('/dashboard',{replace:true})
}

// --------------------------------
const [value,setvalue]=useState('')
const [isvalue,setisvalue]=useState(false)
const handleChange = (e)=>{
setvalue(e.target.value)
const check = value.split('').includes('@')
if(check){setisvalue(true)}else{setisvalue(false)}
}

const [user,setuser]= useState('')
// -------------------------------------------------
const getUser = async()=>{
setisload(true)
await axios.get(`/getuser/${value}`)
.then((res)=>{
    setuser(res.data)
    setisload(false)
})
.catch((err)=>{
console.log(err)
})
}



    const config = {
    public_key: "FLWPUBK_TEST-25609c4c24fb0e7c374cabe8a47047c2-X",
    tx_ref: `${tag+uuid()}`,
    amount: amount,
    currency: "NGN",
    payment_options: "card, mobilemoneyghana, ussd",
    redirect_url: "http://localhost:3000/payment_confirmation",
    
    customer: {
      email: user.email,
      
      name: `${user.first_name+' '+user.last_name}`,
    },
    customizations: {
      title: "Jaex Inc",
      description: "subscription plan",
      logo: 'https://firebasestorage.googleapis.com/v0/b/jaex-b9931.appspot.com/o/logo%2Flogo2.ico?alt=media&token=32f72362-a8b9-4b28-908c-901aea46a41d',
    },
  }
//}

const handleFlutterPayment = useFlutterwave(config);

const Makepayment =()=>{

  handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                //closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {
                //history('/')
            },
          });
}

// Test MasterCard PIN authentication
//  Card number: 5531 8866 5214 2950
//  cvv: 564
//  Expiry: 09/32
//  Pin: 3310
//  OTP: 12345

// Card number: 4556052704172643
//   cvv: 899
//   Expiry: 09/32
//   Pin: 3310
//   OTP: 12345

return(
    <article className='secure_pay'>
        {/* -------------------------- */}
        {isload&&<section className='log_loading'><Init/></section>}
        {/* ------------------------- */}
       <div className='pay_desc_cont'>
        <article className="pay_desc" style={{backgroundImage:`url('../../../../graphics/paybg.png')`,backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}>
<div className="pay_head"> <img src="../../../../graphics/logo1.ico" alt='jaex'/></div>
<div className="pay_body">

<article className="pay_body_item">
<div className="pay_body_tag">Plan</div>
<div className="pay_body_desc">{Name}</div>
</article>
{/* --------------------- */}
<article className="pay_body_item">
<div className="pay_body_tag">Amount</div>
<div className="pay_body_desc">{Amount}</div>
</article>
</div>
<div className="pay_foot" onClick={Cancel}><ArrowBackIcon/>Cancel your payment</div>
        </article>
       </div>
       {/* ------------------------------ */}
        <div className='pay_form'>
           <div className='pay_input_div'> <input type='text' name='email' value={value} placeholder='Enter your email' onChange={handleChange}/> {isvalue&&<IconButton onClick={getUser}><ArrowForwardIcon style={{fontSize:'16px', color:'rgb(161,207,57)'}}/></IconButton>} </div>
           {/* ---------------------- */}
           <div className='pay_input_div'>{user.first_name}</div>
           {/* ---------------- */}
           <div className='pay_input_div'>{user.last_name} </div>

            <div className='pay_init' onClick={Makepayment}>Proceed to pay </div>

        </div>
    </article>
)
}

export default Secure_payment