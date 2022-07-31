import {useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'
import { useGlobalContext } from '../../controller/context_api'
import { useNavigate } from 'react-router-dom'
import Loading from '../loading'
import PlanA from './subplans/plan_a1'
import PlanB from './subplans/plan_b1'
import PlanC from './subplans/plan_c1'
import { CloseRounded } from '@material-ui/icons'


const ProfileDashboard = ()=>{
  const {userid, userimage, useremail, userstate, usercountry,
    userpassword, userfname, userlname, usergender,setLoggeduser,
  usercourse, userdob, islogin,isLoading,userplan,planexpiry,issubscribed} = useGlobalContext() 

const history = useNavigate()
const [ismodal,setismodal] = useState(false)
const activateModal =()=>{
setismodal(true)
}
const closeModal =()=>{
setismodal(false)
}
 return(
  <> 
{isLoading? <Loading/>:
<section className='dash_container'>
{/* ------------------------------ */}
{ismodal&&<section className='payment_modal'>
  <div className='close_payment_modal'><CloseRounded onClick={closeModal}/></div>
  <div className='payment_modal_cont'>
  <PlanA />
<PlanC/>
      <PlanB/> 
      </div>
  </section>}
{/* ------------------------------ */}

        <Navigation/>
     {/* ////////////////////////////////////////////////////////////////// */}
        <article className='dash_body'>
            
        <DashboardMenu/>
        {/* /////////////////right content/////////////////////////////////// */}
        <div className='dash_l_content'>
        <article className='profile_title'>Account profile</article>
        <article className='profile_body'>
        <div className='profile_section1'>
          {/* //////////user info */}
          <article className='profile_info'>
            <div  className='p_info_label'>First name</div>
            <div className='p_info_name'>{userfname}</div>
            <div className='p_info_label'>Last name</div>
            <div className='p_info_name'>{userlname}</div>
          </article>
          {/* ////////////subscription///////////// */}
          <article className='profile_info'>
          <div className='profile_label'>Subscription</div>
          <p>Account Status</p>
            <article className='profile_stat'>
             {issubscribed? <div className='profile_success'>Active</div>
              :<><div className='profile_danger'>Not active</div>
              <div className='profile_neutral' onClick={activateModal}>activate</div></>
              }
            </article>
            <p>Service Plan</p>
            <div className='profile_primary'>{userplan||'***********'}</div>
            <p>Expiration Date</p>
            <div className='profile_primary'>{planexpiry||'***********'}</div>
          </article>

          {/* ///////////registered course///////// */}
          <article className='profile_info'>
          <div className='profile_label'>Registered Courses</div>
          <div className='profile_course_cont'>
            {
              usercourse.map((course, index)=>{
                const {subject} = course;
                 return (
                    <div className='profile_course' key={index}>{subject}</div>
                 )
              })
            }

          </div>

          </article>

        </div>
        <div className='profile_section2'>
      <div className='profile_label'>Account Info</div>

<article className='profile_info_cont'>
      <p>Email:</p>
      <div className='profile_primary'>{useremail}</div>
      </article>
{/* /////////////////////////////////////// */}
      <article className='profile_info_cont'>
      <p>Password:</p>
      <div className='profile_primary'>************</div>
      <div className='profile_neutral'>change</div>
      </article>
{/* /////////////////////////////////////// */}
<article className='profile_info_cont'>
      <p>Country:</p>
      <div className='profile_primary'>{usercountry}</div>
      </article>
{/* /////////////////////////////////////// */}
<article className='profile_info_cont'>
      <p>State:</p>
      <div className='profile_primary'>{userstate}</div>
      </article>
{/* /////////////////////////////////////// */}
<article className='profile_info_cont'>
      <p>Date of birth:</p>
      <div className='profile_primary'>{userdob}</div>
      </article>
{/* /////////////////////////////////////// */}
<article className='profile_info_cont'>
      <p>Gender:</p>
      <div className='profile_primary'>{usergender}</div>
      </article>
{/* /////////////////////////////////////// */}


        </div>


        </article>
          
        </div>
        </article>
        </section>
        }
        </>
    )
}

export default ProfileDashboard;