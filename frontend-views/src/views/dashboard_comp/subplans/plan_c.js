import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useNavigate } from 'react-router-dom';
import {planC} from './plans'

const PlanC = ()=>{

const history = useNavigate()
const payment_init = ()=>{
history('/jaex_secure_payment/pro',{replace:true})
}

    return(
        <article className='plan_body' style={{ height: '80%',zIndex:'1'}}>
            <div className='plan_tag plan_tag3'>Pro</div>
            <div className='plan_value'><AccountBalanceWalletIcon/> 6,000</div>
            <article className='plan_desc_cont'>
            {planC.map((plan,index)=>{
            const {name}=plan;
            return(<div className='plan_desc' key={index}><CheckCircleOutlineIcon/>{name}</div>)})}
            </article>
 <div className='plan_checkout' onClick={payment_init}>Get started</div>
        </article>
    )
}

export default PlanC