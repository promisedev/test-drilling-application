import {useEffect, useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../controller/context_api'
import Loading from '../loading'
import PlanA from './subplans/plan_a'
import PlanB from './subplans/plan_b'
import PlanC from './subplans/plan_c'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const Dashboard = ()=>{
const{islogin,isLoading} =useGlobalContext()
const history = useNavigate()

const queryParams = new URLSearchParams(window.location.search)
const message = queryParams.get("message")
//console.log(message,"hello")

const [iserror,setisError] = useState(false)
const [issuccess,setisSuccess] = useState(false)
const [error,setError] = useState('')
const [success,setSuccess] = useState('')

useEffect(()=>{
  if(message === 'successful'){setisSuccess(true);setSuccess('Payment was made successfully') }else
  if(message === 'unsuccessful'){setisError(true);setError('Payment was not successful') }

setTimeout(()=>{
setisSuccess(false);setSuccess('')  
setisError(false);setError('')
},9000)

return ()=>clearTimeout()


},[])



 return(
  <> 
{isLoading? <Loading/>:
<section className='dash_container'>
        <Navigation/>
     {/* ////////////////////////////////////////////////////////////////// */}
        <article className='dash_body'>
            
        <DashboardMenu/>
        {/* /////////////////right content/////////////////////////////////// */}
        <div className='dash_l_content'>
          {/* ------------------------- */}
          <div className='err_div'>{iserror&&<article className='error error2'><ErrorOutlineIcon/> {error}</article>}</div>
            <div className='err_div'>{issuccess&&<article className='success'><CheckCircleOutlineIcon/> {success}</article>}</div>
            {/* /////////////////////////// */}
        <article className='dashone'>
        <div className='dashone_desc'> Get Started by choosing a subscription plan that
        best suits your budget.</div>
        </article>
        <article className='dash_plan_cont' style={{backgroundImage:`url("../../../../graphics/dashimage.png")`,backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}>

        <PlanA/>
<PlanC/>
      <PlanB/>  
        </article>
          
        </div>
        </article>
        </section>
        }
        </>
    )
}

export default Dashboard;