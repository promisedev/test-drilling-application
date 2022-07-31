

import {useEffect, useRef, useState,} from 'react'
import Navigation from '../navigation'
import dashmenu from '../dashboard_comp/dashmenu.json'
import DashboardMenu from '../dashboard_comp/dashboard_menu'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { useGlobalContext } from '../../controller/context_api'
import Loading from '../loading'
import { ArrowBack, ExpandMore, Fullscreen, FullscreenExit, PauseCircleOutlineRounded, PlayCircleOutlineRounded } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import VideoComponent from './videocomponent'
import axios from '../axios'
import Init from '../init_loading'
const SingleVideo = ()=>{
const{islogin,isLoading,isload,setisload,videos} =useGlobalContext()
const history = useNavigate()
const [login,setLogin] =useState(true)
// ////////////getting exact video////////////////////
const id = useParams().id
const [currentvideo,setCurrentvideo] = useState({})
const othervideos = videos.filter(video=>video._id !== id && video.course === currentvideo.course)

useEffect(()=>{ 
setisload(true)
axios.get(`/getvideos/${id}`)
.then((res)=>{
  setCurrentvideo(res.data);
setisload(false)})
.catch((err)=>console.log(err))

},[id])

//console.log(currentvideo.videoUrl)

// ////////////configuring video behaviour
const videoBody = useRef(null)
//const videoOverlay = videoBody.current;
const [isLarge,setIslarge] = useState(false)

const handleEnlarge = ()=>{
 const videoOverlay = videoBody.current; 
 videoOverlay.classList.add('show_video')

}
// ------------------------------
const handleDecrease = ()=>{
const videoOverlay = videoBody.current; 
videoOverlay.classList.remove('show_video')
}
// ---------------------------------------------
const video = useRef(null)
const video2 = useRef(null)
const [playing,setplaying] = useState(false)
// --------------------------------------
const playvideo =()=>{
  console.log("hello")
  if(playing){
    video.current.pause()
    video2.current.pause()
    setplaying(false)
  }else{
video.current.play()
video2.current.play()
    setplaying(true)
  }
}
// ------------------------------------
const play1 =useRef(null)
const play2 = useRef(null)
const showPlay = ()=>{
play1.current.classList.add('show_video_action')
play2.current.classList.add('show_video_action')
// setTimeout(()=>{
// play1.current.classList.remove('show_video_action')
// play2.current.classList.remove('show_video_action')
// },8000)

// return ()=>clearTimeout()

} 
// -----------------------------
const hidePlay = ()=>{
play1.current.classList.remove('show_video_action')
play2.current.classList.remove('show_video_action')
} 
 return(
  <> 
{isLoading? <Loading/>:
<section className='dash_container'>
{/* ///////////////////////////////////////////////////////////////// */}
   {/* / loading*/}
   {isload&&<section className='log_loading'><Init/></section>}
        <article className='enlarge_active_video' ref={videoBody}>
          {/*  */}
        
<video loop className='playing_video' src={currentvideo.videoUrl} ref={video2} onMouseOver={showPlay}  onMouseOut={hidePlay}> </video>
        <article className='video_active_action hide_video_action' onClick={playvideo}ref={play1} onMouseOver={showPlay}>{playing?<PauseCircleOutlineRounded/>:<PlayCircleOutlineRounded/>}</article>
        <article className='video_active_view'><IconButton><FullscreenExit style={{cursor:'pointer'}} onClick={handleDecrease}/></IconButton></article>
        </article>
            {/*  */}
{/* ///////////////large video/////////////////// */}
        <Navigation/>
     {/* ////////////////////////////////////////////////////////////////// */}
        <article className='dash_body'>
         
        <DashboardMenu/>
        {/* /////////////////right content/////////////////////////////////// */}
        <div className='dash_l_content'>
        
        <article className='course_ctr'><Link to={`/dashboard/courses/${currentvideo.course}`}><IconButton><ArrowBack/></IconButton></Link></article>
        <article className='video_body_cont'>
            {/* /////////active video/////////// */}
          <div className='video_main'>
        <article className='video_main_cont'>
        <div className='active_video' >

<video loop className='playing_video' src={currentvideo.videoUrl} ref={video}   onMouseOver={showPlay} onMouseOut={hidePlay}>  </video>

        <article className='video_active_action hide_video_action' onClick={playvideo} ref={play2} onMouseOver={showPlay}  >{playing?<PauseCircleOutlineRounded/>:<PlayCircleOutlineRounded/>}</article>
        <article className='video_active_view'><IconButton><Fullscreen style={{cursor:'pointer'}} onClick={handleEnlarge}/></IconButton></article>
        </div>
        {/* /////////////////////////////////// */}
        <div className='video_main_ctr'>
        <article className='video_tag'>Note</article>
        <article className='video_tag_item'>
           <div className='video_tag_link'>Take Quiz</div> 
            <div className='video_tag_more'><ExpandMore/></div>
        </article>
        </div>

        </article>

        </div> 
          {/* ////////////////other related videos///////////////////////////// */}
          <div className='video_other'>
            <article className='video_other_ele'>
            
            {
              othervideos.map((video,index)=>{
              return(
              <VideoComponent props={video} key={index}/>
              )
            }
            )}
            </article>
            </div> 
        </article>

        </div>
        </article>
        </section>
        }
        </>
    )
}

export default SingleVideo;