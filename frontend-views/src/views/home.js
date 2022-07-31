import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import { useGlobalContext } from "../controller/context_api"
import Preloader from './preloader'

import Navigation from "./navigation"
import Homesection1 from './home_section/homeSection1'
import Homesection2 from './home_section/homeSection2'
import Homesection3 from './home_section/homeSection3'
import Homesection4 from './home_section/homeSection4'
import Footer from './footer'


const Home = ()=>{
const {isPreloader,setisPreloader,isLogin,isLoading} = useGlobalContext()
const windowHeight = window.innerHeight;
//useEffect(()=>{ window.addEventListener('load',()=>{setisPreloader(false)})},[])





    return (
        isLoading?<Preloader/>:
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
{/* ////////////////////home section 4//////////////////////////////////////////// */}
<Homesection4/>

<Footer/>
</section>
    )
}

export default Home;