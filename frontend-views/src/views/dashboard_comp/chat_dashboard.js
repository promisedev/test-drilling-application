import {useState} from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashboardMenu from './dashboard_menu'
import { Avatar, IconButton } from '@material-ui/core'
import { useGlobalContext } from '../../controller/context_api'
import { AttachFile, Telegram, Twitter } from '@material-ui/icons'
import SingleChat from './singlechat'
import { useNavigate } from 'react-router-dom'
import Loading from '../loading'
import axios from '../axios'




const ChatDashboard = ()=>{
const { userimage, userfname, chatMessage, islogin,isLoading } = useGlobalContext()
const history = useNavigate()
const [input,setInput]= useState('')
const handleinput =(e)=>{
 setInput(e.target.value)
}

const handleMessage = async(e)=>{
e.preventDefault()
const time = new Date()
if(input === ''){}
else{
await axios.post('/newmessage',{
  sender:userfname,
  time:time,
  message:input
})
.then((res)=>{})
.catch((err)=>{console.log(err)})
}
}

 return(
 <>  
  {isLoading? <Loading/>:

<section className='dash_container'>
        <Navigation/>
     {/* ////////////////////////////////////////////////////////////////// */}
     
        <article className='dash_body'>
             
        <DashboardMenu/>
        {/* /////////////////right content/////////////////////////////////// */}
        <div className='dash_l_content' style={{overflow:'hidden'}}>
        <section className='chat_body_cont'>
          {/* /////////chat head///////////////// */}
        <article className='chat_head'>
          <span className='chat_logo'>Chatroom</span> <div className='chat_ava'>
            <Avatar src={userimage}/>
            <span className='chat_notify'>12</span>
          </div>
        </article> 
        {/* ////////chat body//////////////// */}
        <article className='chat_body'>
          {
            chatMessage.map((props,index)=>{

              return(
              <SingleChat props={props} key={index}/>
              )
            })
            
          }
          
        </article>
        {/* ///////////////chat control//////////// */}
        <article className='chat_control'>
          <div className='chat_message_cont'>
            <form onSubmit={handleMessage}>
            <input type='text' name='message' id='message' value={input.message} onChange={handleinput} 
            autoComplete='none' placeholder='Send a message...'/>
            <div className='form_button_cont'>
            <label htmlFor='file' className='input_file' > 
              <AttachFile/>
              <input type='file' name='file' id='file'/>
              </label>
            <div className='form_button' onClick={handleMessage}>
              <IconButton type='submit'   >
              <Telegram/>
              </IconButton>
            </div>
            </div>
            </form>
          </div>
        </article>

        {/* /////////////////////////////// */}
        </section>
          
        </div>
        </article>
        </section>
        }
        </>
    )
}

export default ChatDashboard;