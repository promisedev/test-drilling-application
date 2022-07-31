import {  PlayCircleOutlineRounded } from "@material-ui/icons"
import { Link } from "react-router-dom"


const CourseComponent = (vprops,props) => {
 const{_id,course,videoUrl,topic}=vprops.vprops
  const course_name = course 
  return (
    <article className="single_video_cont">
        <div className='single_video'>
<video className='playing_video' src={videoUrl}> </video>
            <article className='video_ctr'><Link to={`/dashboard/courses/${course_name}/${_id}`}><PlayCircleOutlineRounded/></Link></article>
        </div>
        <div className='single_video_desc'>
            <article className='video_title_cont'>
                <div className='video_title'>{topic}</div>
                <div className="video_link">Take Quiz</div>
            </article>
            <article className='video_date_cont'>Released Aug 23, 2019</article>
        </div>
    </article>
  )
}

export default CourseComponent