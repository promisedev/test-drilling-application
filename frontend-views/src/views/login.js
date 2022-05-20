import {Link} from 'react-router-dom'
import {useEffect} from 'react'
import Navigation from './navigation'
import {useGlobalContext} from '../controller/context_api'
import logs from './logs.json'

const Login = ()=>{
const {handleSubmit} = useGlobalContext()
const windowHeight = window.innerHeight;

//useEffect(()=>{
const changeLog = (e) =>{
    e.currentTarget.classList.add('change_log_btn')
//console.log(e.currentTarget,'clicked')
}

const rmchangeLog = (e) =>{
    e.currentTarget.classList.remove('change_log_btn')
//console.log(e.currentTarget,'clicked')
}
//},[])

    

return (
    <section className="login_container" style={{height:`${windowHeight}px`}}>
{/* ///////////////////navigation ////////////////////////////*/}
<Navigation/>
{/*////////////////////////////////////////////////////////////*/} 
<article className="login_div">
    <div className='log_title'>User Login  <span></span></div>
    <form className='log_form' onSubmit={handleSubmit}>
        <input type='text' name='email' id='email' placeholder='Enter email or phone number'/>
        <div className='form_pass'>
        <input type='password' name='password' id='password' placeholder='password' />
        <div className='show_pass'></div>
</div>
<div className='recover'>Recover password</div>

        <button type='submit' onClick={handleSubmit}>Sign in</button>
<div className='reg'>Not registered yet? <Link to='/signup'>Create an account</Link></div>
    </form>
    <div className='o_log'>
       <article className='hr'>  or continue with</article>
        <article className='log_button'>
{
    logs.map((log)=>{
const {id,icon} = log;

return(
    <div className='log_btn' key={id} onMouseOver={changeLog} onMouseOut={rmchangeLog} >
        <img src={icon} alt='log_icon' className='log_image'/>
    </div>
)
    })
}
        </article>
    </div>
</article>
    </section>
)
}

export default Login;

