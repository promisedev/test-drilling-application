import {useGlobalContext} from '../../controller/context_api'
import {Link} from 'react-router-dom'
//import users from './users.json'


const DashbordMenu =()=>{ 


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
              <article className='dash_avatar_image'
               style={{backgroundImage:`url("${userimage}")`,
               backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></article>
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
              <div className='dash_contr_btn'
              style={{background:'url("./graphics/slide.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}>
              </div>
              </article>
            </div>
            {/* ////////////////////////// */}
           </article>
          {/* //////////////////////////////////////////////////////////////////////// */}
          <article className='dash_menu_list'>
            <div className='dash_menu_items'>
              
              
                    <article className='dash_single_menu'  onClick={handleMenu} >
                    {ishome ?<> <div className='dash_menu_icon'
                    style={{background:'url("./graphics/a_home.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}>Home</div></>:
                    
                    <Link to="/"><div className='dash_menu_icon'
                    style={{background:'url("./graphics/n_home.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name'>Home</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {isprofile ?<> <div className='dash_menu_icon'
                    style={{background:'url("./graphics/a_profile.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}>Profile</div></>:
                    
                    <Link to="/profile"><div className='dash_menu_icon'
                    style={{background:'url("./graphics/n_profile.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name'>Profile</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                 <article className='dash_single_menu'  onClick={handleMenu}>
                    {iscourse ?<> <div className='dash_menu_icon'
                    style={{background:'url("./graphics/a_course.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}>Courses</div></>:
                    
                    <Link to="/courses"><div className='dash_menu_icon'
                    style={{background:'url("./graphics/n_course.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name'>Courses</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {isstats ?<> <div className='dash_menu_icon'
                    style={{background:'url("./graphics/a_stats.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}>Statistics</div></>:
                    
                    <Link to="/statistics"><div className='dash_menu_icon'
                    style={{background:'url("./graphics/n_stats.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name'>Statistics</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {istest ?<> <div className='dash_menu_icon'
                    style={{background:'url("./graphics/a_test.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}>Test drilling</div></>:
                    
                    <Link to="/test_drilling"><div className='dash_menu_icon'
                    style={{background:'url("./graphics/n_test.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name'>Test drilling</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                    <article className='dash_single_menu' onClick={handleMenu} >
                    {ischat ?<> <div className='dash_menu_icon'
                    style={{background:'url("./graphics/a_chatroom.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}>Chatroom</div></>:
                    
                    <Link to="/chatroom"><div className='dash_menu_icon'
                    style={{background:'url("./graphics/n_chatroom.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name'>Chatroom</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {islive ?<> <div className='dash_menu_icon'
                    style={{background:'url("./graphics/a_live.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}>Live meeting</div></>:
                    
                    <Link to="/live_meeting"><div className='dash_menu_icon'
                    style={{background:'url("./graphics/n_live.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name'>Live meeting</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}
                  <article className='dash_single_menu' onClick={handleMenu} >
                    {isnotify ?<> <div className='dash_menu_icon'
                    style={{background:'url("./graphics/a_notify.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name' style={{color:'rgb(161,207,57)'}}>Notification</div></>:
                    
                    <Link to="/notifications"><div className='dash_menu_icon'
                    style={{background:'url("./graphics/n_notify.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name'>Notification</div></Link>}
                    </article>
                    {/* // //////////////////////////// */}


                    
              

            </div>
            {/* /////////////////////////////////////////////////////////// */}
            <div className='dash_menu_log'>
              <article className='dash_menu_button'>
              <div className='log_menu_icon'
                    style={{background:'url("./graphics/logout.ico")',
              backgroundRepeat:'no-repeat', backgroundSize:'100% 100%'}}></div>
                    <div className='dash_menu_name' >Log out</div>
              </article>
              </div>
           </article>
        </div>
    )
}

export default DashbordMenu;
