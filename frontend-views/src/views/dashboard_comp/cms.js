import {useRef, useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../controller/context_api'
import Loading from '../loading'
import Init from '../init_loading'
import { CloudUpload, CloudUploadOutlined } from '@material-ui/icons'
import CmsVideo from './cmsform/cmsvideo'
import CmsArticle from './cmsform/cmsarticle'
import CmsQuestion from './cmsform/cmsquestion'
const CmsDashboard = ()=>{
const{islogin,isLoading,isload} =useGlobalContext()
const history = useNavigate()

const video = useRef(null) 
const article = useRef(null)
const question = useRef(null)
const [position,setPosition] = useState('0')
const changePosition = (e)=>{
  const payload =  e.target.textContent.split(' ')[1];
const video_ele =video.current
const article_ele =article.current
const question_ele =question.current

  if(payload === 'Video'){setPosition('0');
video_ele.classList.add('active_cms_ctr');
article_ele.classList.remove('active_cms_ctr');
question_ele.classList.remove('active_cms_ctr');
}else
if(payload ==='Article'){setPosition('100');
video_ele.classList.remove('active_cms_ctr');
article_ele.classList.add('active_cms_ctr');
question_ele.classList.remove('active_cms_ctr');}else
  if(payload ==='Question'){setPosition('200');
video_ele.classList.remove('active_cms_ctr');
article_ele.classList.remove('active_cms_ctr');
question_ele.classList.add('active_cms_ctr');}

  
}




 return(
  <> 
{isLoading? <Loading/>:
<section className='dash_container'>
   {isload&&<section className='log_loading'><Init/></section>}
   
        <Navigation/>
     {/* ////////////////////////////////////////////////////////////////// */}
        <article className='dash_body'>
            
        <DashboardMenu/>
        {/* /////////////////right content/////////////////////////////////// */}
        <div className='dash_l_content'>
         
        <article className='notify_header'>Content Management System</article>
        <article className='cms_control'>
            <div className='cms_ctr' onClick={changePosition}ref={video}><CloudUploadOutlined/> Video</div>
            <div className='cms_ctr'onClick={changePosition}ref={article}><CloudUploadOutlined/> Article</div>
            <div className='cms_ctr'onClick={changePosition}ref={question}><CloudUploadOutlined/> Question</div>
        </article>

        <article className='cms_body'>
            {/* video upload form */}
            <div className='cms_body_items'style={{left:'0%',transform:`translateX(-${position}%)`}}><CmsVideo/></div>
            {/* video upload form */}
            <div className='cms_body_items'style={{left:'100%',transform:`translateX(-${position}%)`}}><CmsArticle/></div>
            {/* video upload form */}
            <div className='cms_body_items'style={{left:'200%',transform:`translateX(-${position}%)`}}><CmsQuestion/></div>

        </article>  
        </div>
        </article>
        </section>
        }
        </>
    )
}

export default CmsDashboard;