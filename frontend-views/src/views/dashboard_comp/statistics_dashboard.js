import {useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashbordMenu from './dashboard_menu'

const StatisticsDashboard = ()=>{

 return(
<section className='dash_container'>
        <Navigation/>
     {/* ////////////////////////////////////////////////////////////////// */}
        <article className='dash_body'>
            
        <DashbordMenu/>
        {/* /////////////////right content/////////////////////////////////// */}
        <div className='dash_l_content'>
        
          statistics
        </div>
        </article>
        </section>
    )
}

export default StatisticsDashboard;