import { IconButton } from "@material-ui/core";
import { AttachFile, CloudUploadOutlined, ExpandMore} from "@material-ui/icons"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { useEffect, useRef, useState } from "react"
import axios from '../../axios'
import courses from '../../courses.json'

import {storage } from './firebase'
import {ref, uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4 as uuid} from 'uuid'
import { useGlobalContext } from "../../../controller/context_api";
// import Loading from '../../init_loading'


const CmsVideo = ()=>{

const {setIsLoading,setisload} = useGlobalContext()
const [video_name,setVideo_name]=useState('') 
//---------------------- form data 
const [video,setVideo]=useState('')
const [course,setCourse]=useState('Course')
const [topic,setTopic]=useState('Topic')
// //------------form error
const [iserror,setisError] = useState(false)
const [error,setError] = useState('')
const [issuccess,setisSuccess] = useState(false)
const [success,setSuccess] = useState('')


useEffect(()=>{
  
 setTimeout(()=>{
  setTopic('Topic');
setCourse('Course');
setVideo('');
setVideo_name('')
setisSuccess(false)  
setSuccess('')
 },3000)

return()=>{
  clearTimeout()
}

},[success])
// -------------------------------------
const handleFileInput = (e)=>{
const videocont = e.target.files[0] 
setisError(false); 
setVideo(videocont)  
const videoname = `${e.target.files[0].name.substring(0,20) +''+ '...'}`
setVideo_name(videoname)
const videotype = e.target.files[0].type
}

// -------------------------
const drop_cont_ref = useRef(null)

const handleOption = (e)=>{
const drop_cont = drop_cont_ref.current;
drop_cont.classList.toggle('cms_show')

}
// ----------------------------
const handleCourse = (e)=>{
  setCourse(e.target.value)
const drop_cont = drop_cont_ref.current;
 drop_cont.classList.remove('cms_show') 
}

// -------------------------------
const handleTextInput = (e)=>{
  setisError(false);
setTopic(e.target.value)
}
// ----------------file uploading
const handleFileUpload = (e)=>{
  e.preventDefault()
if(video === ''){setisError(true); setError('please choose a video file')}else 
if(course === 'Course'){setisError(true); setError('Choose a valid course name')}
else 
if(topic === 'Topic'){setisError(true); setError('Enter a topic')}
else{
setisload(true)
const videoref =  ref(storage, `jaex_videos/${'jaex' + uuid()}`)
uploadBytes(videoref, video).then((res)=>{
  getDownloadURL(videoref).then(async(url)=>{ 
    // uploaading to mongodb
    const Url = url
    await axios.post('/newvideo',{
      course: course.toLowerCase(),
      videoUrl:Url,
      topic:topic
    })
    .then((res)=>{
     setisload(false) 
     setisSuccess(true)
     setSuccess('successfully uploaded a new file')
     //console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  
  })
})

}

} 



    return(
        <article className='cms_videoform_cont'>
  
          <div className='cms_header'>Video</div> 
           {/* ---------------error------------------------- */}
            <div className='err_div'>{iserror&&<article className='error'><ErrorOutlineIcon/> {error}</article>}</div>
            <div className='err_div'>{issuccess&&<article className='success'><CheckCircleOutlineIcon/> {success}</article>}</div>
{/* ----------------------------------------------------------- */}

          <form className='cms_form' onSubmit={handleFileUpload}>

            <div className='cms_form_div'>
              <div className='cms_form_content'>{video_name}</div>
              <label htmlFor="cfile" className='cms_label'>
                <AttachFile/> 
            <input type='file' name='cfile' id="cfile" onChange={handleFileInput}/>
              </label>  
            </div>
{/* ------------------------------------------------------- */}
<div className='cms_form_div'>
              <div className='cms_form_content'>{course}</div>
              <div className='cms_drop' onClick={handleOption}><ExpandMore/></div> 
          <div className='cms_drop_content' ref={drop_cont_ref}>
        <article className='cms_drop_form'>
          {
            courses.map((course,index)=>{
              const {id,name} = course;

              return(
          <div className='cms_drop_form_div' key={id}>
            <input type='radio' name='courses' id={name} value={name} onClick={handleCourse}/>
            <label htmlFor={name}>{name}</label>
          </div> 
          
              )

            })
          }
           

         </article> 
         </div>
            </div>
{/* ------------------------------------------------------- */}
<div className='cms_form_div'>
              <input type='text' name='title' value={topic}
              onChange={handleTextInput}/>
         </div>     
{/* ------------------------------------------------------- */}
<div className="cms_button"  onClick={handleFileUpload}><CloudUploadOutlined/>Upload</div>
          </form>

        </article>
    )
}

export default CmsVideo
