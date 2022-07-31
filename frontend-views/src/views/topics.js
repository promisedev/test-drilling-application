import Navigation from './navigation'
import Physics from './topic/physics'
import Chemistry from './topic/chemistry'
import Mathematics from './topic/mathematics'
import English from './topic/english'
import Biology from './topic/biology'
import Footer from './footer'
import { useGlobalContext } from '../controller/context_api'
import axios from './axios'
import { useEffect, useRef, useState } from 'react'
import Init from './init_loading'
import { Link, useNavigate } from 'react-router-dom'

const Topics = () => {
const {isload,setisload,videos, interestedTopic, setlearnposition} = useGlobalContext()

const learnitem = useRef(null)
const [learncourse,setlearncourse]= useState('')
const [learnid,setlearnid]= useState('')
const history = useNavigate()
console.log(learncourse,learnid)

useEffect( async()=>{
if(interestedTopic === ''){}else{
setisload(true)
  await axios.get(`/getvideos/${interestedTopic}`)
  .then((res)=>{
setlearncourse(res.data.course) 
setlearnid(res.data._id)   
setisload(false)
const position= learnitem.current.getBoundingClientRect().top 
 window.scrollTo(0,position)
  })
  .catch((err)=>{
    console.log(err)
  })
}


},[interestedTopic])

const learn = ()=>{
if(learnid || learncourse !== ''){
  console.log(learnid,learncourse)
history(`/dashboard/courses/${learncourse}/${learnid}`,{replace:true})
}
}
// /getting all topics
const physicstopic = videos.filter(video=>video.course === 'physics')
const chemistrytopic =videos.filter(video=>video.course === 'chemistry')
const biologytopic =videos.filter(video=>video.course === 'biology')
const mathstopic =videos.filter(video=>video.course === 'mathematics')
const englishstopic =videos.filter(video=>video.course === 'english')

// console.log(physicstopic,chemistrytopic,biologytopic,mathstopic,englishstopic)

  return (
    <section className="topic_container">
      {isload&&<section className='log_loading'><Init/></section>}
        <Navigation/>
{/* ///////////////////////////////////// */}
<article className='topic_body'>
<div className='topic_overlay'>
   <p className='topic_h1'>Choose a topic and start learning</p> 
   <div className='topic_h3'>There are over 200+ topics to get you prepared for your exam</div>
</div>
<Physics props={physicstopic} />
<Chemistry props={chemistrytopic}/>
<Mathematics props={mathstopic}/>
<English props={englishstopic}/>
<Biology props={biologytopic}/>

<div className='topic_action'>
    <div className='topic_btn' ref={learnitem} onClick={learn}>Start Learning</div>
</div>
</article>
<Footer/>
    </section>
  )
}

export default Topics