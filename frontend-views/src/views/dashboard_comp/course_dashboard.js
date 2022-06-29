import {useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'
import { useGlobalContext } from '../../controller/context_api'
 import {ArrowForward} from '@material-ui/icons'

const CourseDashboard = ()=>{
  const {userid, userfname, usercourse, learn_progress} = useGlobalContext()

console.log(usercourse);
 return(
<section className='dash_container'>
        <Navigation/>
     {/* ////////////////////////////////////////////////////////////////// */}
        <article className='dash_body'>
             
        <DashboardMenu/>
        {/* /////////////////right content/////////////////////////////////// */}
        <div className='dash_l_content'>
        
          <article className='dash_welcome'>
            <p className='dash_p1'>Hello <span>{userfname}!</span></p>
            <div className='dash_p2'>this is how far your progress has been</div>
          </article>
          <article className='dash_subject_cont'> 
            {
              usercourse.map((course,index)=>{
                const {name,no_completedtopics,topics} = course;
                let color
                let color2
                if(index === 0){color="rgb(243,235,215)"; color2="rgb(223,197,123"} else
                 if(index === 1){color="rgb(238,242,209)";color2="rgb(183,197,93"} else
                if(index === 2){color="rgb(207,219,228)";color2="rgb(159,185,202"} else
                if(index === 3){color="rgb(236,243,245)" ; color2="rgb(125,184,199"} else
                if(index === 4){color="rgb(235,232,203)";color2="rgb(125,184,200"}

                return ( 
                  <article className='dash_subject' style={{backgroundColor:`${color}`}}
                  key={index}>
                      <div className='subject_title'>
                        <article className='subject_name'>{name.toLowerCase()}</article>
                        <article className='subject_button'><ArrowForward style={{color:`${color2}`, fontSize:"22px"}}/></article>
                      </div>
                      {/* ///////////// */}
                      <div className='subject_overview'>
                        <article className='subject_number'>
                          <div>Number of topics</div>
                          <div>{topics}</div>
                        </article>
                        <article className='subject_progress'></article>
                      </div>
                  </article>
                )
              })
            }
          </article>
        </div>
        </article>
        </section>
    )
}

export default CourseDashboard;