import {Link} from 'react-router-dom'
import { useGlobalContext } from "../controller/context_api"
import pages from '../pages.json'
import {Default, Logged } from './actions'
const Navigation = ()=>{
 
    const {handleSubmit, isLogin} = useGlobalContext()

    return (
        <article className='navigation_div' style={{background:"rgb(24,28,31)"}}>
        <div className='logo_div'><img src={'./graphics/logo1.ico'} alt='logo' className='nav_logo'/></div>
        {/* //////////search div////////// */}
        <div className='search_div'>
          <form onSubmit={handleSubmit}>
            <input type="search" name="search"  placeholder="search for your favorite topic..."/> 
        </form>
        </div> 
        {/* ////////navigation list//////////// */}
        <div className='nav_div' >
          <ul>{
              pages.map((item)=>{
               const {id,route,name} = item;
               return ( <li key={id}><Link to={route}>{name}</Link></li>) 

              })
          }
          </ul>
        </div>
        {/* /////////login/signup/ dashboard button/////////// */}
        <div className='action_div'>
          {isLogin?<Logged/>:<Default/>}
        </div>
        </article>
    )
}

export default Navigation;