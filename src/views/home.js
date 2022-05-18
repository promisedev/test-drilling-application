import {Link} from 'react-router-dom'
import { useGlobalContext } from "../controller/context_api"
import Loading from './loading'
import Navigation from "./navigation"
import Homesection1 from './home_section/homeSection1'
import Homesection2 from './home_section/homeSection2'
import Homesection3 from './home_section/homeSection3'

const Home = ()=>{
const {isLoading,setisLoading,isLogin} = useGlobalContext()
const windowHeight = window.innerHeight;

    return (
        isLoading?<Loading/>:
        <section className='home_content' >
{/* ////////////////hero section/////////////////////////////////// */}
            <article className='hero' style={{height:`${windowHeight}px`,
            background:"url('./graphics/background.png')", backgroundSize:"100% 100%",
            backgroundRepeat:"no-repeat" }}>
                {/* ............body of hero goes here.................................. */}
<Navigation/>
{/* //////////////////////////////////////////////////////////////////////////////// */}
<div className="hero_txt">
<article className="hero_txt1">
    <div className="hero_h1"> Quick Solution to Jamb
 exam preparation </div>
</article>
<article className="hero_txt2">
    <div className="hero_h2"> Developed for science students, with over 300+
 topics to learn from. </div>
</article>
<article className="hero_link">
     {isLogin?<Link to="/dashboard"> <div className="hero_btn">Get Started</div></Link>:<Link to="/login"><div className="hero_btn">Get Started</div></Link>} 
</article>    
</div>

        </article>
{/* ///////////////////home section 1//////////////////////////////////////////// */}

<Homesection1/>
{/* ///////////////////home section 2/////////////////////////////////////// */}
<Homesection2/>   
{/* ////////////////////home section 3 ///////////////////////////////////////// */}
<Homesection3/>


</section>
    )
}

export default Home;