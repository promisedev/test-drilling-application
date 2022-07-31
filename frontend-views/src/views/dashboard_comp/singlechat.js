import { Avatar } from "@material-ui/core"
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../controller/context_api";

const SingleChat = (props)=>{
const { userfname } = useGlobalContext()
 const {id,sender,time, message} = props.props;
 const newtime =time.slice(0,10)
//  console.log(newtime)
 const [issender,setIssender] = useState('')
 useEffect(()=>{if(sender === userfname){
     setIssender(true)
 }},[])
 //console.log(issender)
    return (
<div className={`single_chat ${issender && "user_chat"}`} key={id}>
    <article className='sender_info'>
        <Avatar/>
        <div className='sender_desc'>
            <div className="sender_name">{sender}</div>
            <div className="sender_time">{newtime}</div>
        </div>
    </article>
    <article className='sender_message'>{message} </article>
</div>
    )
}

export default SingleChat










