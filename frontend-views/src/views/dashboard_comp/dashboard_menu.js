import {useEffect, useState} from 'react'
import {useGlobalContext} from '../../controller/context_api'
import {Link} from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { ArrowBackIos, HomeOutlined, Person, Assignment, BarChart,
LibraryBooks,
People,
Videocam,
Notifications,
Login,
ControlPoint} from '@material-ui/icons'
import { useNavigate } from 'react-router-dom'
import axios from '../axios'


const DashboardMenu =()=>{ 
const history = useNavigate()
const { userimage, userfname, userlname } = useGlobalContext()

 const {ishome,
    isprofile,
    iscourse,
    isstats,
     istest,
    islive,
    ischat,
    isnotify,
    iscms,
      handleMenu,setisLogin, setIsLoading,loggeduser,userroles,
    issubscribed} = useGlobalContext()

 const handleLogout = async()=>{
  setIsLoading(true)
  await axios.get('/logout',{withCredentials:true}).then((res)=>{
   setisLogin(false)
    setIsLoading(false) 
    history('/login', {replace:true})
     })
}
// ------------------check for unlogged user
// useEffect(()=>{ 
//   if(loggeduser === ''){history('/', {replace:true})}
// },[loggeduser])


let Username = ''  
 
 Username = `${userfname +" "+ userlname}`
//console.log(Username);

const isAdmin = userroles.includes('admin');


    return (
      
        <div className='dash_menu'>
          <article className='menu_head'><div className='txt'>WORKSPACE</div> </article>
          {/* ///////////////////////////////////////////////////////////////// */}
          <article className='dash_menu_avatar'>
            <div className='dash_segment1'>
              <article className='dash_avatar_image'><Avatar src={userimage}/> </article>
             <article className='dash_avatar_name' >{Username.toUpperCase()}</article>
            </div>
            
            {/* ////////////////////////////// */}
            <div className='dash_segment2'>
              <article className='dash_desc1' > Account Status</article>
              {issubscribed? <div className='profile_success' style={{marginTop:'5%'}}>Active</div>
              : <article className='dash_desc2' >Not active</article>}
            </div>
            {/* //////////////////////////////// */}
            <div className='dash_segment3'>
              <article className='dash_contr' >
              <div className='dash_contr_btn'><ArrowBackIos/> </div>
              </article>
            </div>
            {/* ////////////////////////// */}
           </article>
          {/* //////////////////////////////////////////////////////////////////////// */}
          <article className='dash_menu_list'>
            <div className='dash_menu_items' style={{backgroundImage:`url('../../../../graphics/dashbg2.png')`,backgroundSize:'100% 100%', backgroundRepeat:'no-repeat'}}>
              
              
                    <article className='dash_single_menu'  onClick={handleMenu} >
                    {ishome ?<> 
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><HomeOutlined/>Home</div></>:
                    
                    <Link to="/"><div className='dash_menu_name'><HomeOutlined/>Home</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {isprofile ?<> <Link to="/dashboard/profile"><div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><Person/>Profile</div></Link></>:
                    
                    <Link to="/dashboard/profile"><div className='dash_menu_name'><Person/>Profile</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                 <article className='dash_single_menu'  onClick={handleMenu}>
                    {iscourse ?<> <Link to="/dashboard/courses"><div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><LibraryBooks/>Courses</div></Link></>:
                     
                    <Link to="/dashboard/courses"><div className='dash_menu_name'><LibraryBooks/>Courses</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {isstats ?<><Link to="/dashboard/statistics"> <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><BarChart/>Statistics</div></Link></>:
                    
                    <Link to="/dashboard/statistics"><div className='dash_menu_name'><BarChart/>Statistics</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {istest ?<><Link to="/dashboard/test_drilling"><div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><Assignment/>Test drilling</div></Link></>:
                    
                    <Link to="/dashboard/test_drilling"><div className='dash_menu_name'><Assignment/>Test drilling</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                    <article className='dash_single_menu' onClick={handleMenu} >
                    {ischat ?<><Link to="/dashboard/chatroom"> <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><People/>Chatroom</div></Link></>:
                    
                    <Link to="/dashboard/chatroom"><div className='dash_menu_name'><People/>Chatroom</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {islive ?<><Link to="/dashboard/live_meeting"><div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><Videocam/>Live meeting</div></Link></>:
                    
                    <Link to="/dashboard/live_meeting"><div className='dash_menu_name'><Videocam/>Live meeting</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {isnotify ?<><Link to="/dashboard/notifications"><div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><Notifications/>Notification</div></Link></>:
                    
                    <Link to="/dashboard/notifications"><div className='dash_menu_name'><Notifications/>Notification</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}

                   {isAdmin&&<article className='dash_single_menu' onClick={handleMenu} >
                    {iscms ?<><Link to="/dashboard/content-management-system"><div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><ControlPoint/>CMS</div></Link></>:
                    
                    <Link to="/dashboard/content-management-system"><div className='dash_menu_name'><ControlPoint/>CMS</div></Link>}
                    </article>} 
                    {/* // //////////////////////////// */}
                    
              

            </div>
            {/* /////////////////////////////////////////////////////////// */}
            <div className='dash_menu_log'>
              <article className='dash_menu_button'onClick={handleLogout}>
              <div className='dash_menu_name'>Log out</div>
              </article>
              </div>
           </article>
        </div>
                    
      
    )
}

export default DashboardMenu;
