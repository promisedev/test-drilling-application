import {useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'

const LiveDashboard = ()=>{

 return(
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
    )
}

export default LiveDashboard;