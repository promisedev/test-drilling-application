import {useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashbordMenu from './dashboard_menu'
import { useGlobalContext } from '../../controller/context_api'

const CourseDashboard = ()=>{
  const {userid, userfname, usercourse} = useGlobalContext()

console.log(usercourse);
 return(
<section className='dash_container'>
        <Navigation/>
     {/* ////////////////////////////////////////////////////////////////// */}
        <article className='dash_body'>
            
        <DashbordMenu/>
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
                if(index === 0){color="rgb(243,235,215)"} else
                 if(index === 1){color="rgb(238,242,209)"} else
                if(index === 2){color="rgb(207,219,228)"} else
                if(index === 3){color="rgb(236,243,245)"} else
                if(index === 4){color="rgb(235,232,203)"}

                return ( 
                  <article className='dash_subject' style={{backgroundColor:`${color}`}}
                  key={index}>
                      <div className='subject_title'>
                        <article className='subject_name'>{name.toLowerCase()}</article>
                        <article className='subject_button'></article>
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