import {useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'
import { CircularProgress } from '@material-ui/core'
import { useGlobalContext } from '../../controller/context_api'
import { useNavigate } from 'react-router-dom'
import Loading from '../loading'
const StatisticsDashboard = ()=>{
 const {usercourse,drill_progress,islogin,isLoading} = useGlobalContext()
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
        <article className='stats_header'>Statistics</article>
         {/*///////////////////////////////  */}
        <article className='learning_div'>
      <div className='learning_div_title'>Learning progress</div>
      <div className='learning_div_progress'>
        
          {                
          usercourse.map((progress,index)=>{
             
           const{subject,no_completedtopics,topics}=progress;
           let performance = `${no_completedtopics/topics*100}`;
           performance = Math.ceil(performance)
           let color;
            if(performance <=39){color="red"}else
          if(performance <=59){color="rgb(232,184,65)"}else
            if(performance <=69){color="rgb(233,140,42)"}else
            if(performance >=70){color="rgb(84,178,53)"}
            
           return(
             <article className="single_progress" key={index}>
             <div className='single_progress_cont'>
          
          <span>{performance}%</span>
          <CircularProgress style={{width:'90%', height:'90%', color:`${color}`}}
          variant='determinate'  value={performance}/>

          {/* //////////////////////////// */}
        </div>
        <div className='single_progress_name'> {subject.toLocaleUpperCase()} </div>
            </article>
            )
          })
        }
        
      </div>
        </article>
        {/* //////////////////////////////// */}
        <article className='drill_div'>
          <div className='learning_div_title'>Drill Performance</div>
          <div className='drill_attempt_cont'>
            {/* ////////////////////// */}
          {
          drill_progress.map((progress)=>{
           const{id,name,performance}=progress;
           let color;
            if(performance <=39){color="red"}else
          if(performance <=59){color="rgb(232,184,65)"}else
            if(performance <=69){color="rgb(233,140,42)"}else
            if(performance >=70){color="rgb(84,178,53)"}
            
           return(
            <article className='single_drill' key={id}>
              <div className='drill_name'> {name} </div>
              <div className='drill_progress'>
                  <div className='d_progress' style={{width:`${performance}%`, backgroundColor:`${color}`}}/>
              </div>
              <div className='drill_percent'> {performance}% </div>
            </article>
            )
          })
          }
            {/* ////////////////////////// */}
          </div>
        </article>
        </div>
        </article>
        </section>
        }
        </>
    )
}

export default StatisticsDashboard;