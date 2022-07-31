import Navigation from './navigation'
import Footer from './footer'
import {ExpandMore} from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import faqs from './faq.json'

const Help = ()=>{

    const openFaqDrop =(e)=>{

      const drop_element = e.currentTarget.parentElement.parentElement.lastChild;
      drop_element.classList.toggle('show_single_dropdown')
      
    }


    return(
        <section className='help_component'>
            <Navigation/>
            {/* ---------------------------------- */}
            <article className='help_body'>
<div className='faq_cont'>
<article className='faq_title'>{"Frequently Asked Questions?(FAQ)"}</article>

{faqs.map((faq)=>{
const {id,title,description} = faq

return(
    <article className='single_faq' key={id}>
    <div className='single_faq_title'>{title} <div className='drop_button' onClick={openFaqDrop} style={{position:'absolute', right:'15%',top:'5%',cursor:'pointer'}}><IconButton><ExpandMore/></IconButton></div></div>

    <div className='single_faq_dropdown'><article className='single_faq_desc'>{description}</article></div>
</article>
)
})

}
</div>
{/* ---------------------------- */}
<div className='suggestion_cont'>
   <article className='suggestion_title'>Drop a suggestion on how we can improve our service.</article> 
<form className='sug_form'>
    <input type='text' name='email' placeholder='Enter your email'/>
     <textarea  rows="4" cols="80" maxlength="200" placeholder='Make a suggestion...'></textarea>

      <div className='sug_button'>Send</div>  
</form>


</div>

            </article>
<Footer/>
        </section>
    )
}

export default Help