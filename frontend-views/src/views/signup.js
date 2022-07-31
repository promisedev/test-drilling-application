import { Link, useNavigate} from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import Navigation from './navigation'
import { useGlobalContext } from '../controller/context_api'
//import subjectss from './subjects.json'
import Footer from './footer'
import genders from './gender.json'
import states from './states.json'
import countrys from './countrys.json'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import axios from './axios'
import Loading from './init_loading'



const Signup = () => {
    const history = useNavigate()
    const [isloading,setisLoading] = useState(false);
    const { handleClick, subject,setSubject} = useGlobalContext();

    //console.log(subjectss,subject)

    const selected_subjects = subject.filter((subject) => subject.selected === true)
     
// /////////////user information
    const [userSubject, setUsersubject] = useState([])

    useEffect(()=>{setUsersubject(selected_subjects)},[subject])
    
    const [user_info, setUser_info] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        date_of_birth: ''
    })
 const [user_state, setUser_state] = useState(null)
 const [user_country, setUser_country] = useState(null)
 const [user_gender, setUser_gender] = useState(null)
 
//  error messages///////
 const [iserr,setIserr] = useState(false)
    const [randerr,setRanderr] = useState("")
    const [passerr,setPasserr] = useState("")
    const [ispasserr,setIspasserr] = useState(false)
    // take all form inputs
    const handleInputs = (e) => {
        setUser_info((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
setIserr(false);
setIspasserr(false)
    }
    // perform form submission
   
    const handleRegister = async(e) => {
        e.preventDefault();
    // check is password match
    if(!user_info.password || !user_info.confirm_password || !user_info.date_of_birth || !user_info.email || !user_info.first_name || !user_info.last_name || !user_state || !user_country || !user_gender || !userSubject) {setRanderr("user info is required"); setIserr(true)}
     else{ 
        if(user_info.password !== user_info.confirm_password) {setPasserr("password does not match"); setIspasserr(true)}else
        if(userSubject.length <1) {setRanderr("select a subject"); setIserr(true)} else{
    setisLoading(true)
            await axios.post('/signup',{
                userInfo:user_info,
                course:userSubject,
                gender:user_gender,
                state:user_state,
                country:user_country,
                refresh_token:'',
                sub_token:'',
                sub_plan:'',
                plan_expiry:'',
                issubscribed:'',  
                roles:''
            }).then((res)=>{
            //console.log(res.status)
            if(res.status === 201){
            setisLoading(false)
            history('/account',{replace:true})
            }
            }
                ).catch((err)=>{
                //console.log(err)
                setisLoading(false)
                setRanderr("User already exist"); setIserr(true)
                
            })
        // console.log(user_info);
        // console.log(userSubject)
        // console.log(user_state)
        // console.log(user_country)
        // console.log(user_gender)
}        

}

    }
    // //////////////////
    // subjects state
    const activate = (e, _id, selected) => {
        e.currentTarget.classList.add('s_active');

        //getting other subjects

        const other_subject = subject.filter((subject) => subject._id !== _id)
        //getting current subject
        let current_subject = subject.filter((subject) => subject._id === _id)
        const c_id = current_subject[0]._id
        const c_subject = current_subject[0].subject
        const c_topics = current_subject[0].topics
        //creating a new object array
        const new_single_sub = [{ _id: c_id, subject: c_subject, selected: true,topics:c_topics }]

        //updating subject state with new values
        setSubject([...other_subject, ...new_single_sub])
    }

    const de_activate = (e, _id, selected) => {
        e.currentTarget.classList.remove('s_active');

        //getting other subjects
        
        const other_subject = subject.filter((subject) => subject._id !== _id)
        //console.log(other_subject);
        //getting current subject
        let current_subject = subject.filter((subject) => subject._id === _id)
        const c_id = current_subject[0]._id
        const c_subject = current_subject[0].subject
        const c_selected = current_subject[0].selected
        const c_topics = current_subject[0].topics
        //creating a new object array
        const new_single_sub = [{ _id: c_id, subject: c_subject, selected: false, topics: c_topics }]
        //console.log(new_single_sub)
        //updating subject state with new values
        setSubject([...other_subject, ...new_single_sub])
    }
    const drop_country = useRef(null)
    const drop_gender = useRef(null)
    const drop_state = useRef(null)
    

    const countryDrop = (e)=>{
        drop_country.current.classList.toggle('drop_display')
     }
    const genderDrop = (e)=>{ 
        drop_gender.current.classList.toggle('drop_display')    
    }
    const stateDrop = (e)=>{
        drop_state.current.classList.toggle('drop_display')
     }
    const dropDisappear = (e)=>{
     
    //e.currentTarget.classList.remove('drop_display')
     }
const Setstate = (e)=>{
const txt = e.currentTarget.textContent;
setUser_state(txt)
}
const Setcountry = (e)=>{
const txt = e.currentTarget.textContent;
setUser_country(txt)
}
const Setgender = (e)=>{
  const txt = e.currentTarget.textContent;
  setUser_gender(txt) 
}

    return (
        <section className='signup_cont'>
            <Navigation />
            {/* ////////////////////////////////// */}
{isloading&&<section className='log_loading'><Loading/></section>}
            <form className='signup_form' onSubmit={handleClick}>
                <div className='err_div'>{iserr&&<article className='error'><ErrorOutlineIcon/> {randerr}
                    </article>}</div>
                <article className='signup_body'>
                    {/* //////signup form 1///////// */}
                    <div className='signup_form1'>
                        <article className='signup_title'>Create New Account  <span></span></article>
                        <article className='signup_sub'>Already a member? <Link to='/login'>Log in</Link></article>
                        <article className='signup_name'>
                            <input type='text' name='first_name' id='first_name' value={user_info.first_name} onChange={handleInputs}
                                placeholder='First name' />
                            <input type='text' name='last_name' id='last_name' value={user_info.last_name} onChange={handleInputs}
                                placeholder='Last name' />
                        </article>
                        <input type='text' name='email' id='email' value={user_info.email} onChange={handleInputs}
                            placeholder='Email' />
                        <input type='password' name='password' id='password' value={user_info.Password} onChange={handleInputs}
                            placeholder='Password' />
                        <input type='password' name='confirm_password' id='confirm_password' value={user_info.confirm_password} onChange={handleInputs}
                            placeholder='Confirm password' />
                            {ispasserr && <span className="pass_err"><ErrorOutlineIcon/>{passerr}</span>}
                    </div>
                    {/* /////////////////center////////// */}
                    <div className='signup_center'></div>
                    {/* //////signup form 2///////// */}
                    <div className='signup_form2'>
                        <article className='signup_label'><div className='label'>other information</div></article>
                        <input type='hidden' name='gender' id='gender' value={user_info.gender} onChange={handleInputs}
                        />
                        <article className='signup_field' onClick={genderDrop} >Gender
                        {/* dropdown for setting genders */}
                        <nav className='g_drop_list' ref={drop_gender} onMouseOut={dropDisappear}>
                           {genders.map((gend)=>{
                            const {id, name, selected} = gend;
                            return(
                            <div className='single_list' key={id} 
                             onClick={Setgender} >
                                {name}
                            </div>)

                           })} 
                        </nav>
                        {/* ///////////////////////// */}
                            <div className='field_value'>{user_gender} </div>
                        </article>
                        <article className='signup_date' >
                            Date of birth
                            <input type='date' name='date_of_birth' id='date_of_birth' value={user_info.date_of_birth} onChange={handleInputs}
                                placeholder='Date of birth' />
                        </article>
                        <input type='hidden' name='country' id='country' value={user_info.country} onChange={handleInputs}
                        />
                        <article className='signup_field' onClick={countryDrop}>Country
                        {/* dropdown for setting genders */}
                        <nav className='c_drop_list' ref={drop_country} onMouseOut={dropDisappear}>
                           {countrys.map((countr)=>{
                            const {id, name,} = countr;
                            return(
                            <div className='single_list' key={id}
                              onClick={Setcountry}>
                                {name}
                            </div>)

                           })} 
                        </nav>
                        {/* ///////////////////////// */}
                            <div className='field_value'>{user_country}</div>
                        </article>
                        <input type='hidden' name='state' id='state' value={user_info.state} onChange={handleInputs}
                        />
                        <article className='signup_field' onClick={stateDrop}>State
                        {/* dropdown for setting genders */}
                        <nav className='s_drop_list' ref={drop_state} onMouseOut={dropDisappear}>
                           {states.map((stat)=>{
                            const {id, state} = stat;
                            return(
                            <div className='single_list' key={id}
                              onClick={Setstate}>
                                {state}
                            </div>)

                           })} 
                        </nav>
                        {/* ///////////////////////// */}
                            <div className='field_value'>{user_state}</div>
                        </article>
                        <article className='signup_label'><div className='label'>Choose subjects</div></article>
                        <article className='subjects_ele'>
                            {
                                subject.map((subj) => {
                                    const { _id, subject, selected } = subj;
                                    let isselected = selected;
                                    return (
                                        isselected ? <div className='single_subject' key={_id} onClick={(e) => de_activate(e, _id, selected)}>
                                            <span className='s_select'>-</span>{subject}</div>
                                            : <div className='single_subject' key={_id} onClick={(e) => activate(e, _id, selected)}>
                                                <span>+</span>{subject}
                                            </div>
                                    )
                                })
                            }

                        </article>
                    </div>
                </article>
                {/* /////////////////////////////////////// */}

                <article className='signup_button'>
                    <button type='submit'  onClick={handleRegister}>Register</button>
                </article>
            </form>

<Footer/>
        </section>
    )
}


export default Signup;