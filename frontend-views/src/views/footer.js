
const Footer =()=>{

const year = new Date().getFullYear()
return(
    <footer className='footer_ele'>
     <article className='footer_copy'>&copy;{' Jaex technology'+' '+year+' all rights reserved.'} </article>
     <article className='footer_links'>
        <div className='footer_link'>About</div>
        <div className='footer_link'>Contact us</div>
        <div className='footer_link'>Privacy policy</div>
        <div className='footer_link'>Terms and condition</div>
     </article>
     </footer>
)
}

export default Footer