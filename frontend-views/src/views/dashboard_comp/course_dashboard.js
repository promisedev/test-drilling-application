import {useEffect, useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'
import { useGlobalContext } from '../../controller/context_api'
 import {ArrowForward} from '@material-ui/icons'
import { CircularProgress } from '@material-ui/core'
import { Link, useNavigate} from 'react-router-dom'
import Loading from '../loading'

const CourseDashboard = ()=>{
  const {userid, userfname, usercourse, learn_progress, islogin,isLoading} = useGlobalContext()
 
  const history = useNavigate()


//console.log(usercourse);
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
        
          <article className='dash_welcome'>
            <p className='dash_p1'>Hello <span>{userfname}!</span></p>
            <div className='dash_p2'>this is how far your progress has been</div>
          </article>
          <article className='dash_subject_cont'> 
            {
              usercourse.map((course,index)=>{
                const {subject,no_completedtopics,topics} = course;

            let performance = `${no_completedtopics/topics*100}`;
           performance = Math.ceil(performance)
           console.log(performance, )
           
           let color3;
            if(performance <=39){color3="red"}else
          if(performance <=59){color3="rgb(232,184,65)"}else
            if(performance <=69){color3="rgb(233,140,42)"}else
            if(performance >=70){color3="rgb(84,178,53)"}

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
                        <article className='subject_name'>{subject.toUpperCase()}</article>
                        <article className='subject_button'><Link to={`/dashboard/courses/${subject}`}><ArrowForward style={{color:`${color2}`, fontSize:"22px"}}/></Link></article>
                      </div>
                      {/* ///////////// */}
                      <div className='subject_overview'>
                        <article className='subject_number'>
                          <div>Number of topics</div>
                          <div className='sub_num'>{topics}</div>
                        </article>
                        <article className='subject_progress_cont'>
                          <div className='subject_progress'>
                            <span style={{backgroundColor:`${color}`}}>{performance}%</span>
                          <CircularProgress style={{width:'90%', height:'90%', color:`${color3}`}}
                          variant='determinate'  value={performance}/>
                          </div>
                        </article>
                      </div>
                  </article>
                ) 
              })
            }
          </article>
        </div>
        </article>
        </section>
        }
        </>
    )
}

export default CourseDashboard;