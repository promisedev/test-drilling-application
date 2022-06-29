import Navigation from './navigation'
import Physics from './topic/physics'
import Chemistry from './topic/chemistry'
import Mathematics from './topic/mathematics'
import English from './topic/english'
import Biology from './topic/biology'


const Topics = () => {
  return (
    <section className="topic_container">
        <Navigation/>
{/* ///////////////////////////////////// */}
<article className='topic_body'>
<div className='topic_overlay'>
   <p className='topic_h1'>Choose a topic and start learning</p> 
   <div className='topic_h3'>There are over 200+ topics to get you prepared for your exam</div>
</div>
<Physics/>
<Chemistry/>
<Mathematics/>
<English/>
<Biology/>

<div className='topic_action'>
    <div className='topic_btn'>Start Learning</div>
</div>
</article>
    </section>
  )
}

export default Topics