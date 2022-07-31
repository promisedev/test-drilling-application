import {  PlayCircleOutlineRounded } from "@material-ui/icons"
import { Link } from "react-router-dom"


const VideoComponent = (props) => {
  //console.log(props)
  const {_id,course,topic,videoUrl} = props.props
  return (
    <article className="single_video_cont2">
        <div className='single_video'>
<video className='playing_video' src={videoUrl}> </video>
            <article className='video_ctr2'><Link to={`/dashboard/courses/${course}/${_id}`}><PlayCircleOutlineRounded/></Link></article>
        </div>
        <div className='single_video_desc'>
            <article className='video_title_cont2'>
                <div className='video_title'>{topic}</div>
                {/* <div className="video_link">Take Quiz</div> */}
            </article>
            <article className='video_date_cont2'>Released Aug 23, 2019</article>
        </div>
    </article>
  )
}

export default VideoComponent