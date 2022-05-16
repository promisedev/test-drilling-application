import { useGlobalContext } from "../controller/context_api"
import Loading from './loading'
import Navigation from "./navigation"
const Home = ()=>{
const {isLoading,setisLoading} = useGlobalContext()
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





            </article>
{/* ///////////////////....//////////////////////////////////////////// */}
        </section>
    )
}

export default Home;