import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import Navigation from './navigation'
import { useGlobalContext } from '../controller/context_api'
import subjects from './subjects.json'



const Signup = () => {
    const { handleClick } = useGlobalContext();
    const [subject, setSubject] = useState(subjects)

    const selected_subjects = subject.filter((subject) => subject.selected === true)
    
    const [userSubject, setUsersubject] = useState([])

    useEffect(()=>{setUsersubject(selected_subjects)},[subject])

    const [user_info, setUser_info] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        date_of_birth: '',
        country: '',
        state: '',
        user_subject: userSubject
    })
    // take all form inputs
    const handleInputs = (e) => {
        setUser_info((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }
    // perform form submission
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(user_info);
        console.log(userSubject)
        console.log(selected_subjects)
    }
    // //////////////////
    // subjects state
    const activate = (e, id, selected) => {
        e.currentTarget.classList.add('s_active');

        //getting other subjects

        const other_subject = subject.filter((subject) => subject.id !== id)
        //getting current subject
        let current_subject = subject.filter((subject) => subject.id === id)
        const c_id = current_subject[0].id
        const c_subject = current_subject[0].subject

        //creating a new object array
        const new_single_sub = [{ id: c_id, subject: c_subject, selected: true }]

        //updating subject state with new values
        setSubject([...other_subject, ...new_single_sub])
    }

    const de_activate = (e, id, selected) => {
        e.currentTarget.classList.remove('s_active');

        //getting other subjects

        const other_subject = subject.filter((subject) => subject.id !== id)
        console.log(other_subject);
        //getting current subject
        let current_subject = subject.filter((subject) => subject.id === id)
        const c_id = current_subject[0].id
        const c_subject = current_subject[0].subject
        const c_selected = current_subject[0].selected
        //creating a new object array
        const new_single_sub = [{ id: c_id, subject: c_subject, selected: false }]
        console.log(new_single_sub)
        //updating subject state with new values
        setSubject([...other_subject, ...new_single_sub])
    }

    return (
        <section className='signup_cont'>
            <Navigation />
            {/* ////////////////////////////////// */}

            <form className='signup_form' onSubmit={handleClick}>

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
                    </div>
                    {/* /////////////////center////////// */}
                    <div className='signup_center'></div>
                    {/* //////signup form 2///////// */}
                    <div className='signup_form2'>
                        <article className='signup_label'><div className='label'>other information</div></article>
                        <input type='hidden' name='gender' id='gender' value={user_info.gender} onChange={handleInputs}
                        />
                        <article className='signup_field' >Gender
                            <div className='field_value'> </div>
                        </article>
                        <article className='signup_date' >
                            Date of birth
                            <input type='date' name='date_of_birth' id='date_of_birth' value={user_info.date_of_birth} onChange={handleInputs}
                                placeholder='Date of birth' />
                        </article>
                        <input type='hidden' name='country' id='country' value={user_info.country} onChange={handleInputs}
                        />
                        <article className='signup_field'>Country
                            <div className='field_value'>{user_info.country}</div>
                        </article>
                        <input type='hidden' name='state' id='state' value={user_info.state} onChange={handleInputs}
                        />
                        <article className='signup_field'>State
                            <div className='field_value'>{user_info.state}</div>
                        </article>
                        <article className='signup_label'><div className='label'>Choose subjects</div></article>
                        <article className='subjects_ele'>
                            {
                                subject.map((subj) => {
                                    const { id, subject, selected } = subj;
                                    let isselected = selected;
                                    return (
                                        isselected ? <div className='single_subject' key={id} onClick={(e) => de_activate(e, id, selected)}>
                                            <span className='s_select'>-</span>{subject}</div>
                                            : <div className='single_subject' key={id} onClick={(e) => activate(e, id, selected)}>
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

        </section>
    )
}


export default Signup;