import discover from './discover'
import {Link} from 'react-router-dom'
const Homesection4 = ()=>{

    return(
                <section className='sec4'>
<article className='section4_heading'>
Take a  little tour and discover more.
</article>
<article className='section4_items'> 
{
  discover.map((item)=>{
const {id, name, link, icon} = item;


      return(
<Link to={link} key={id}  >
{/* <div className='section4_item'> */}
        <article className='section4_image' style={{background:`url(${icon})`,
    backgroundRepeat:"no-repeat", backgroundSize:"100% 100%"}}>

        </article>
        <article className="section4_desc">
            {name}
        </article>
{/*</div> */} 
</Link>
      )
    
  })  
}
</article>
        </section>
    )
}

export default Homesection4;



