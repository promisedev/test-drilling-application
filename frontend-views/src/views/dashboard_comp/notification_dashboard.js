import {useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'
import {Done, DoneAll, ExpandMore} from '@material-ui/icons'




const NotificationDashboard = ()=>{

 return(
<section className='dash_container'>
        <Navigation/>
     {/* ////////////////////////////////////////////////////////////////// */}
        <article className='dash_body'>
            
        <DashboardMenu/>
        {/* /////////////////right content/////////////////////////////////// */}
        <div className='dash_l_content'>
        <article className='notify_header'>Notification</article>
        <article className='notify_controls'>
          <div className='notify_button'><span className='notify_symbol'><DoneAll style={{fontSize: '14px', color: 'rgb(0,161,59)'}}/></span>Mark all as read</div>
          <div className='notify_button'><span className='notify_symbol'><Done style={{fontSize:'14px', color: 'rgb(0,161,59)'}}/></span>Select all</div>
          <div className='notify_button danger'>Delete</div>
        </article>
        {/* //////////////////notification body//////// */}
        <article className='notify_body'>
          <div className='single_notify_div'>
            {/* ////////////mark read and select element/ */}
            <article className='notify_actions'>
              
            </article>
            {/* ///////////////message body///////////////////// */}
            <article className='notify_msg'>
              <div className='notify_msg_title'>Payment confirmation</div>
              <div className='notify_msg_desc'> This is to notify you that the following payment was made to this account</div>
            </article>
            {/* ////////////date and view more/ view less element//// */}
          <article className='notify_date_ele'>
            <div className='notify_date'>2022-04-12  12:22:09</div>
            <div className='notify_drop'><ExpandMore/></div>
          </article>
          </div>
        </article>  
        </div>
        </article>
        </section>
    )
}

export default NotificationDashboard;