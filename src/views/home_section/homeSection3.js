import {Link} from 'react-router-dom'
import features from './features.json'
import {useGlobalContext} from '../../controller/context_api'

const Homesection3 = () => {
const {isLogin} = useGlobalContext()

    return (
        <section className='sec3'>
{
    features.map((item)=>{
     const {id,highlight,desc, image,link}  = item;
     return (
         <article className='features_cont' key={id}>
<div className='features_item1'>
    <article className='features_heading'>{highlight}</article>
    <article className='features_desc'>{desc}</article>
    <article className='features_bar'></article>
</div>

{/* ////////////////////////////////// */}
<div className='features_item2'>
<article className='features_image'><img src={image} className='features_img' 
alt='feature'/></article>

<article className='features_button'>
{ isLogin?<Link to={link}><div className='features_btn'>explore</div></Link>:
<Link to='/login'><div className='features_btn'>explore more</div></Link>
}
</article>
</div>

         </article>
     ) 
    })
}
        </section>
    )
}

export default Homesection3;


