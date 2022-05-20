import {Link} from 'react-router-dom'
import {useRef} from 'react'
import Navigation from './navigation'
import  {useGlobalContext} from '../controller/context_api'



const Signup = ()=>{
const {handleClick} = useGlobalContext();
// getting all input elements
const firstName = useRef(null)
const lastName= useRef(null)
const email= useRef(null)
const password = useRef(null)
const confirmPassword = useRef(null)
const gender = useRef(null)
const dob = useRef(null)
const country = useRef(null)
const state = useRef(null)
// //////////////////



    return(
<section className='signup_cont'>
<Navigation/>
{/* ////////////////////////////////// */}

<form className='signup_form' onSubmit={handleClick}>

<article className='signup_body'>
{/* //////signup form 1///////// */}    
<div className='signup_form1'>
<article className='signup_title'>Create New Account  <span></span></article>
<article className='signup_sub'>Already a member? <Link to='/login'>Log in</Link></article>
<article className='signup_name'>
<input type='text' name='first_name' id='first_name' value='' ref={firstName} placeholder='First name'/>
<input type='text' name='last_name' id='last_name' value='' ref={lastName} placeholder='Last name'/>
</article>
<input type='text' name='email' id='email' value='' ref={email} placeholder='Email'/>
<input type='password' name='password' id='password' value='' ref={password} placeholder='Password'/>
<input type='password' name='confirm_password' id='confirm_password' value='' ref={confirmPassword} placeholder='Confirm password'/>
</div>
{/* /////////////////center////////// */}
<div className='signup_center'></div>
{/* //////signup form 2///////// */}
<div className='signup_form2'>
<article className='signup_label'><div className='label'>other information</div></article>
<input type='hidden' name='gender' id='gender' value='' ref={gender} />
<article className='signup_field' >Gender
<div className='field_value'> </div>
</article>
<article className='signup_date' >
Date of birth
<input type='date' name='date_of_birth' id='date_of_birth' value='4533/222' ref={dob} placeholder='Date of birth' />
</article>
<input type='hidden' name='country' id='country' value='' ref={country} />
<article className='signup_field'>Country
<div className='field_value'></div>
</article>
<input type='hidden' name='state' id='state' value='' ref={state} />
<article className='signup_field'>State
<div className='field_value'></div>
</article>
<article className='signup_label'><div className='label'>Choose subjects</div></article>

</div>
</article>
{/* /////////////////////////////////////// */}

<article className='signup_button'>
<button type='submit' onClick={handleClick}>Register</button>
</article>
</form>

</section>
    )
}


export default Signup;