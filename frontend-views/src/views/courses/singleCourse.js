

import {useEffect, useState,} from 'react'
import Navigation from '../navigation'
import dashmenu from '../dashboard_comp/dashmenu.json'
import DashboardMenu from '../dashboard_comp/dashboard_menu'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { useGlobalContext } from '../../controller/context_api'
import Loading from '../loading'
import { ArrowBack, ExpandMore } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import CourseComponent from './coursecomponent'

const SingleCourse = ()=>{
const{islogin,isLoading,videos} =useGlobalContext()
const history = useNavigate()
const [login,setLogin] =useState(true)
const id = useParams().id

const coursename = id
//const [coursevideos,setCoursevideos] = useState([]) 
const video = videos.filter((video)=>video.course === id)



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
        
        <article className='course_ctr'><Link to='/dashboard/courses'><IconButton><ArrowBack/></IconButton></Link></article>
        <article className='course_title_cont'>
          <div className='course_title'>{coursename}</div>
          <div className='course_title_ctr'><ExpandMore/></div>

        </article>
        <article className='course_video_cont'>
          <section className='video_parent'>
          {video.map((videoprop,index)=>{
            
            return(
            <CourseComponent vprops={videoprop}  key={index}/>
            )
          })
          }
          </section>

          
        </article>

        </div>
        </article>
        </section>
        }
        </>
    )
}

export default SingleCourse;