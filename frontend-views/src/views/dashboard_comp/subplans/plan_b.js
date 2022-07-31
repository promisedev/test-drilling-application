import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';
import {planB} from './plans' 

const PlanB = ()=>{
const history = useNavigate()
const payment_init = ()=>{
history('/jaex_secure_payment/premium',{replace:true})
}
    return(
        <article className='plan_body' style={{left:'62%',boxShadow:'none'}}>
            <div className='plan_tag plan_tag2'>Premium</div>
            <div className='plan_value'><AccountBalanceWalletIcon/> 3,600</div>
            <article className='plan_desc_cont'>
            {planB.map((plan,index)=>{
            const {name}=plan;
            return(<div className='plan_desc' key={index}><CheckCircleOutlineIcon/>{name}</div>)})}
            </article>
 <div className='plan_checkout' onClick={payment_init}>Get started</div>
        </article>
    )
}

export default PlanB