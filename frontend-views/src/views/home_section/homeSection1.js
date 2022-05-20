import {Link} from 'react-router-dom'
import article from './article.json'
import {useGlobalContext} from '../../controller/context_api'

const Homesection1 = ()=>{
const {isLogin}  = useGlobalContext();
    return (
        <section className="sec1" >
{
    article.map((item)=>{
const {id,icon, name, link, h1, h2, bg_img } = item;
        return(
         <article className="sec1_item" key={id}>
             {/* //////////setting up background image */}
        <div className="section_head" style={{background:`url(${bg_img})`, backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat"}} >
{/* ///////////////////setting up icon background//////// */}
        <article className="section_icon" style={{background:`url(${icon})`, backgroundSize:"100% 100%",
    backgroundRepeat:"no-repeat"}}></article>
        </div>
        <div className='section_body'>
            <article className="header_one">{h1}</article>
            <article className="header_two">{h2}</article>
        </div>
        <div className='section_btn'>
            {
            isLogin?<Link to={link}><article className="sec_btns">{name} </article></Link>:
                <Link to="/login"><article className="sec_btns">{name} </article></Link>
            }
        </div>
        </article>
        )
    })
    
}
            
        
        </section>

    )
}

export default Homesection1;