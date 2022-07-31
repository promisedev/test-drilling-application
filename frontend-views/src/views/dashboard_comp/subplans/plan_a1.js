import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';
import {planA} from './plans' 

const PlanA = ()=>{
const history = useNavigate()
const payment_init = ()=>{
history('/jaex_secure_payment/basic',{replace:true})
}


    return(
        <article className='plan_body' style={{right:'62%',boxShadow:'none',backgroundColor:'#fff'}}>
            <div className='plan_tag plan_tag1'>Basic</div>
            <div className='plan_value'><AccountBalanceWalletIcon/> 2,100</div>
            <article className='plan_desc_cont'>
            {planA.map((plan,index)=>{
            const {name}=plan;
            return(<div className='plan_desc' key={index}><CheckCircleOutlineIcon/>{name}</div>)})}
            </article>
 <div className='plan_checkout' onClick={payment_init}>Get started</div>
        </article>
    )
}

export default PlanA