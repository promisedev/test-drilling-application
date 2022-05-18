import {Link} from 'react-router-dom'
import {useGlobalContext} from '../../controller/context_api'
const Homesection2 = () =>{
const {isLogin} = useGlobalContext();
    return (
        <section className='sec2'>
<article className='section2_title'>
    <div className='section2_txt'> 
    Perform test drilling and track your progress
    </div>
</article>
{/* ////////////////////////////////////////////////////// */}
<article className='section2_item'>
    <div className='sec2_item1'>
<article className='sec2_image1'>
    <img src={'./graphics/drill_cartoon.png'} className='drill_cartoon' alt='drill_cartoon'/>
    </article>
<article className='sec2_desc'>
Your test drilling performance will let you know how ready you are for your exams.
</article>
    </div>
    {/* //////////////////////////////// */}
    <div className='sec2_item2'>
<article className='sec2_image2'>
    <img src={'./graphics/drill_stats.png'} className='drill_stats' alt='drill_stats'/>
</article>
<article className='sec2_button'>
   {
       isLogin?<Link to="/dashboard/test-drilling"><div className='sec2_btn'>Take a drill</div></Link>: 
       <Link to="/login"><div className='sec2_btn'>Take a drill</div></Link> } 
</article>  
    </div>
</article>

        </section>
    )
}

export default Homesection2;