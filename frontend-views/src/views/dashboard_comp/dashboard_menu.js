import {useGlobalContext} from '../../controller/context_api'
import {Link} from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import { ArrowBackIos, HomeOutlined, Person, Assignment, BarChart,
LibraryBooks,
People,
Videocam,
Notifications,
Login} from '@material-ui/icons'

//import users from './users.json'


const DashboardMenu =()=>{ 


const { userimage, userfname, userlname, } = useGlobalContext()

 const {ishome,
    isprofile,
    iscourse,
    isstats,
     istest,
    islive,
    ischat,
    isnotify,
      handleMenu} = useGlobalContext()


    return (
        <div className='dash_menu'>
          <article className='menu_head'><div className='txt'>WORKSPACE</div> </article>
          {/* ///////////////////////////////////////////////////////////////// */}
          <article className='dash_menu_avatar'>
            <div className='dash_segment1'>
              <article className='dash_avatar_image'><Avatar src={userimage}/> </article>
              <article className='dash_avatar_name' >{userfname +" "+ userlname}</article>
            </div>
            
            {/* ////////////////////////////// */}
            <div className='dash_segment2'>
              <article className='dash_desc1' > Account Status</article>
              <article className='dash_desc2' >Not active</article>
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
            <div className='dash_menu_items'>
              
              
                    <article className='dash_single_menu'  onClick={handleMenu} >
                    {ishome ?<> 
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><HomeOutlined/>Home</div></>:
                    
                    <Link to="/"><div className='dash_menu_name'><HomeOutlined/>Home</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {isprofile ?<> <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><Person/>Profile</div></>:
                    
                    <Link to="/profile"><div className='dash_menu_name'><Person/>Profile</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                 <article className='dash_single_menu'  onClick={handleMenu}>
                    {iscourse ?<> <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><LibraryBooks/>Courses</div></>:
                    
                    <Link to="/courses"><div className='dash_menu_name'><LibraryBooks/>Courses</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {isstats ?<> <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><BarChart/>Statistics</div></>:
                    
                    <Link to="/statistics"><div className='dash_menu_name'><BarChart/>Statistics</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {istest ?<><div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><Assignment/>Test drilling</div></>:
                    
                    <Link to="/test_drilling"><div className='dash_menu_name'><Assignment/>Test drilling</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                    <article className='dash_single_menu' onClick={handleMenu} >
                    {ischat ?<> <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><People/>Chatroom</div></>:
                    
                    <Link to="/chatroom"><div className='dash_menu_name'><People/>Chatroom</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {islive ?<><div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><Videocam/>Live meeting</div></>:
                    
                    <Link to="/live_meeting"><div className='dash_menu_name'><Videocam/>Live meeting</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {isnotify ?<><div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}><Notifications/>Notification</div></>:
                    
                    <Link to="/notifications"><div className='dash_menu_name'><Notifications/>Notification</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}


                    
              

            </div>
            {/* /////////////////////////////////////////////////////////// */}
            <div className='dash_menu_log'>
              <article className='dash_menu_button'>
              <div className='dash_menu_name' >Log out</div>
              </article>
              </div>
           </article>
        </div>
    )
}

export default DashboardMenu;
