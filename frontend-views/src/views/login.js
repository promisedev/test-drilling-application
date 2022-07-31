import {Link,useNavigate} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Navigation from './navigation'
import {useGlobalContext} from '../controller/context_api'
import logs from './logs.json'
import Footer from './footer'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import axios from './axios'
import Loading from './init_loading'

const Login = ()=>{
const {setisLogin,setLoginfo,setIsLoading} = useGlobalContext()
const history = useNavigate();
const windowHeight = window.innerHeight;
const [isloading,setisLoading] = useState(false);
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
const [inputs,setInputs] = useState({
    email:"",
    password:""
})
const [emailerr,setEmailerr] = useState('')
const [passerr,setPasserr] = useState('')
const [randerr,setRanderr] = useState('')
const [isemailerr, setIsemailerr] = useState(false)
const [ispasserr, setIspasserr] = useState(false)
const [iserr, setIserr] = useState(false)
// //////////////////////////////////////////////////////////
const handleInput = (e)=>{
setInputs((prevstate)=>({
    ...prevstate,
    [e.target.name]:e.target.value
}));
setIsemailerr(false);
setIspasserr(false);
setIserr(false)
}

const handleSubmit= async(e)=>{
e.preventDefault()
if(inputs.email === ''){setIsemailerr(true); setEmailerr('please provide a valid email')}else 
if(inputs.password === ''){setIspasserr(true); setPasserr('please provide a password')}else{
    setisLoading(true)

    await axios.post('/login',{
        username:inputs.email.toLowerCase(),
        password:inputs.password
    },{withCredentials:true}).then((res)=>{
        //console.log(res)
        setLoginfo(res.data)
        setisLoading(false)
         setIsLoading(false)
        setisLogin(true)
        history('/',{replace:true})
    }).catch((error)=>{
    const result = error.response.data;
    setisLoading(false)
    setRanderr(result);
    setIserr(true)
})
    
}



}
    



return (
    <section className="login_container" style={{height:`${windowHeight}px`}}>
{/* ///////////////////navigation ////////////////////////////*/}
<Navigation/>
{/*////////////////////////////////////////////////////////////*/} 
{isloading&&<section className='log_loading'><Loading/></section>}
{/* ////////////////////////////////////////////////////// */}
<article className="login_div">
    {/* //catching errors */}
        <div className='err_div'>{iserr&&<article className='error'><ErrorOutlineIcon/> {randerr}
         </article>}</div>
        {/* ------------------------------- */}
    <div className='log_title'>User Login  <span></span></div>
    <form className='log_form' onSubmit={handleSubmit}>
        
        <input type='text' name='email' id='email' placeholder='Enter email or phone number'
        onChange={handleInput} value={inputs.email}/>
        {isemailerr && <span className="pass_err"><ErrorOutlineIcon/>{emailerr}</span>}

        <div className='form_pass'>
        <input type='password' name='password' id='password' placeholder='password'
        onChange={handleInput}  value={inputs.password}/>
        <div className='show_pass'></div>
        </div>
        {ispasserr && <span className="pass_err"><ErrorOutlineIcon/>{passerr}</span>}

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

<Footer/>
    </section>
)
}

export default Login;

