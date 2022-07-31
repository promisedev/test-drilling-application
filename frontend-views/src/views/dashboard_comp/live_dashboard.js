import {useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../controller/context_api'
import Loading from '../loading'
const LiveDashboard = ()=>{
const{islogin,isLoading} =useGlobalContext()
const history = useNavigate()
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
        
          live meeting
        </div>
        </article>
        </section>
        }
        </>
    )
}

export default LiveDashboard;