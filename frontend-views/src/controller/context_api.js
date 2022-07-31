import React, { useState, useEffect, useContext, useReducer} from 'react';
import {Reducer} from './reducer'
import users from '../views/dashboard_comp/users.json'
import topics from '../views/topic/topics.json'
 import messages from '../views/messages.json'
import drill_performance from '../views/drill_p.json'
import axios from '../views/axios'
import { useNavigate } from 'react-router-dom';
import Pusher from 'pusher-js'


const AppContext = React.createContext();

const initialState= { loading:false,}


const AppProvider = ({children}) => {
const [subject, setSubject] = useState([])
//const history = useNavigate()

useEffect(async()=>{

  await axios.get('/subjects').then((res)=>{
    setSubject(res.data);
  })

},[])
//console.log(subject)


const [isLoading, setIsLoading] = useState(true)//set back to true
const [isload, setisload] = useState(false)//set back to true
const [isPreloader,setisPreloader]  = useState(false)
const [isLogin, setisLogin] = useState(false) //set back to false
// /dashboard js
const [ishome, setisHome] = useState(false)
const [isprofile, setisProfile] = useState(false)
const [iscourse, setisCourse] = useState(false)
const [isstats, setisStats] = useState(false)
const [istest, setisTest] = useState(false)
const [ischat, setisChat] = useState(false)
const [islive, setisLive] = useState(false)
const [isnotify, setisNotify] = useState(false)
const [iscms, setisCms] = useState(false)
 //////////////////////////////////////
  const handleMenu =(e)=>{
  const txt = e.currentTarget.textContent;
  if(txt === 'Home'){
    setisHome(true);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(false);
  setisCms(false)}
if(txt === 'Profile'){
    setisHome(false);setisProfile(true);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(false);
  setisCms(false)}
if(txt === 'Courses'){
    setisHome(false);setisProfile(false);
    setisCourse(true); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(false);
  setisCms(false)}
if(txt === 'Statistics'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(true);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(false);
  setisCms(false)}
if(txt === 'Test drilling'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(true); setisChat(false);
    setisLive(false); setisNotify(false);
  setisCms(false)}
if(txt === 'Chatroom'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(true);
    setisLive(false); setisNotify(false);
  setisCms(false)}
if(txt === 'Live meeting'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(true); setisNotify(false);
  setisCms(false)}
if(txt === 'Notification'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(true);
  setisCms(false)} 
 if(txt === 'CMS'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(false);
    setisCms(true)
  } 
  }
    
    ////////////////////logged user info///////////////////////// //
  const [loginfo,setLoginfo] = useState('')  
const [loggeduser, setLoggeduser] = useState('')

//-------------------- getting log info
useEffect( async()=>{
  if(loginfo !== ''){
  let config = { headers :{authorization: `Bearer ${loginfo.token}`}};
  await axios.get(`/dashboard/${loginfo.id}`,config).then((res)=>{
  //console.log(res.data.user)
  if(res){
  setLoggeduser([res.data.user])  
  setisLogin(true)
   }
        })} 
},[loginfo])

//-------------------------- /activating refresh
useEffect( async()=>{
setIsLoading(true)
await axios.get('/refresh',{withCredentials:true}).then((res)=>{
  //console.log(res)
  setLoginfo(res.data)
        setIsLoading(false)
       setisLogin(true) 
}).catch((err)=>{
  console.error(err)})
setIsLoading(false)
setisLogin(false)
},[])

// //setting user info///////////////////////////
 const [userid, setUserid] = useState([])
 const [userroles, setUserroles] = useState([])
 const [userplan, setUserplan] = useState('')
  const [planexpiry, setPlanexpiry] = useState('')
  const [issubscribed, setissubscribed] = useState('')
 const [userimage, setUserimage] = useState('')
const [userfname, setUserfname] = useState('')
const [userlname, setUserlname] = useState('')
const [userdob, setUserdob] = useState([])
const [useremail, setUseremail] = useState([])
const [userpassword, setUserpassword] = useState([])
const [userstate, setUserstate] = useState([]) 
const [usercountry, setUsercountry] = useState([]) 
const [usergender, setUsergender] = useState([])
const [usercourse, setUsercourse] = useState([])
//console.log(loggeduser);
 //  /////////////set info//////////////////////////////
const loaduserinfo = ()=>{
//   let avatar = loggeduser.map((user)=>{
//     const {image} = user;
//     return image
// })
// avatar =avatar[0]
// setUserimage(avatar);

let id = loggeduser.map((user)=>{
  const {_id} = user;
  return _id
})
id =id[0]
setUserid(id);

let roles = loggeduser.map((user)=>{
  const {roles} = user;
  return roles
})
roles =roles[0]
setUserroles(roles);

let plan = loggeduser.map((user)=>{
  const {sub_plan} = user;
  return sub_plan
})
plan =plan[0]
setUserplan(plan);

let expire = loggeduser.map((user)=>{
  const {plan_expiry} = user;
  return plan_expiry
})
expire =expire[0]
setPlanexpiry(expire);

let sub = loggeduser.map((user)=>{
  const {issubscribed} = user;
  return issubscribed
})
sub =sub[0]
setissubscribed(sub);


let state = loggeduser.map((user)=>{
  const {state} = user;
  return state
})
state =state[0]
setUserstate(state);

let country = loggeduser.map((user)=>{
  const {country} = user;
  return country
})
country =country[0]
setUsercountry(country);

let gender = loggeduser.map((user)=>{
  const {gender} = user;
  return gender
})
gender =gender[0]
setUsergender(gender);

let course = loggeduser.map((user)=>{
  const {course} = user;
  return course
})
course =course[0]
setUsercourse(course);
//console.log(course);
// //////

let fname = loggeduser.map((user)=>{
  const {first_name} = user;
  return first_name
})
fname =fname[0]
setUserfname(fname);

let lname = loggeduser.map((user)=>{
  const {last_name} = user;
  return last_name
})
lname =lname[0]
setUserlname(lname);

let email = loggeduser.map((user)=>{
  const {email} = user;
  return email
})
email =email[0]
setUseremail(email);

let password = loggeduser.map((user)=>{
  const {password} = user;
  return password
})
password =password[0]
setUserpassword(password);

let dob = loggeduser.map((user)=>{
  const {date_of_birth} = user;
  return date_of_birth
})
dob =dob[0]
setUserdob(dob);
}



useEffect(()=>{
  if(loggeduser !== ''){loaduserinfo()}},[loggeduser])


// ///getting all videos
const [videos,setVideos] = useState([]);

useEffect(async()=>{

await axios.get('/getvideos')
.then((res)=>{
  setVideos(res.data)

})
.catch((err)=>console.log(err))
},[])
//console.log(videos)

// //////////////////test drilling questions/////////////////////////
const [questions, setQuestions] = useState([])
    let q;
    let quest
    let newquest = []
  for (q = 1; q <= 100; q++) {
         quest= [{q}]    
         newquest = [...newquest, ...quest ];
    }
 
    useEffect(() => { setQuestions([...newquest]) }, [])
    // console.log(newquest);
     //console.log(questions);
//  ///////////////////////////////////////////////////////////
const handleSubmit = (e)=>{
  e.preventDefault()}
// ////////////change question position//////////////////////
const [translateposition, setTranslateposition] = useState(0)
const [isend, setIsend] = useState(false)
let [counter, setCounter] = useState(0)

  const changeQuestion = (e) =>{
    counter++;
    setCounter(counter)
    let position = counter*100;
    if(position == 900){
      setTranslateposition(position)
      setIsend(true)
    }else{    
    setTranslateposition(position)
    }

    }

    const submitQuestion = ()=>{
      console.log("i want to submit");
    }
    // ///////////topic page js///////////////
const [isphy, setIsphy] = useState(false)
const [ismath, setIsmath] = useState(false)
const [ischem, setIschem] = useState(false)
const [iseng, setIseng] = useState(false)
const [isbio, setIsbio] = useState(false)
const [topic, setTopic] = useState(topics)

// //this toggle show and hide of topic overlay
const topicDropdown = (props)=>{
    const {e} = props

const ref_id = e.currentTarget.dataset.id;

 if(ref_id === 'physics'){
   setIsphy(!isphy); setIsmath(false); setIschem(false); 
   setIsbio(false); setIseng(false);
 } else 
if(ref_id === 'chemistry'){
  setIsphy(false); setIsmath(false); setIschem(!ischem); 
   setIsbio(false); setIseng(false);
 } else 
if(ref_id === 'mathematics'){
  setIsphy(false); setIsmath(!ismath); setIschem(false); 
   setIsbio(false); setIseng(false);
 }else 
if(ref_id === 'english'){
 setIsphy(false); setIsmath(false); setIschem(false); 
   setIsbio(false); setIseng(!iseng);
 }else 
if(ref_id === 'biology'){
 setIsphy(false); setIsmath(false); setIschem(false); 
   setIsbio(!isbio); setIseng(false); 
 }
 
}

// /this set the topic to be learnt
const [interestedTopic, setInterestedTopic] = useState('')
const [learnposition, setlearnposition] = useState('')

const userTopic = (props)=>{
  const {e} =props
const topic_id = e.target.dataset.id;
//console.log(topic_id)
setInterestedTopic(topic_id)

}
    // //////////statistics js//////////////////////
    //const [learn_progress, setLearn_progress] = useState(usercourse)
    const [drill_progress, setDrill_progress] = useState(drill_performance)
    
  // ///////////chat room///////////////////
const [chatMessage, setchatMessage] = useState([])

useEffect( async()=>{
await axios.get('/getmessage')
.then((res)=>{
  setchatMessage(res.data)
})
.catch((err)=>{console.log(err)})

},[])
// ////-------------trigger pusher
useEffect(()=>{
  const pusher = new Pusher('740a322764743822fe48', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newmessage)=> {
      //alert(JSON.stringify(data));
      //console.log(newmessage);
      setchatMessage([...chatMessage,newmessage])
    });
  return () => {
  channel.unbind_all();
  channel.unsubscribe();
 }

},[chatMessage])
// //////////////////////////////////
let [state, Dispatch] = useReducer(Reducer, initialState);
    return (   
  <AppContext.Provider value={{
    isLoading,isload,setisload,
    setIsLoading,
    handleSubmit,
    isLogin,
    setisLogin,
    isPreloader,
    setisPreloader,
    ishome,
    setisHome,
    isprofile,
    setisProfile,
    iscourse,
    setisCourse,
    isstats,
    setisStats,
    istest,
    setisTest,
    islive,
    setisLive,
    ischat,
    setisChat,
    isnotify,
    setisNotify,
    iscms,
    setisCms,
    handleMenu,
    userid, userimage, useremail, userstate, usercountry,userroles,
    userpassword, userfname, userlname, usergender,userplan,planexpiry,
    issubscribed,
    setLoggeduser,
    loggeduser, usercourse,userdob,
    questions, setQuestions, changeQuestion,
    translateposition, isend, submitQuestion,
    topicDropdown,
    ischem, ismath, iseng, isbio, isphy,
    topic, userTopic, drill_progress,
     chatMessage,setLoginfo,loginfo,
    subject,setSubject,videos,setlearnposition,interestedTopic
    
  }}>{children}</AppContext.Provider>
    )
}
 export const useGlobalContext = () =>{
    return useContext(AppContext) 
 }

export  {AppContext, AppProvider}