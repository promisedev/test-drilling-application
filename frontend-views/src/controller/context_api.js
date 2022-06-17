import React, { useState, useEffect, useContext, useReducer} from 'react';
import {Reducer} from './reducer'
import users from '../views/dashboard_comp/users.json'

const AppContext = React.createContext();

const initialState= {
 
  loading:false,

}
const AppProvider = ({children}) => {
const [isLoading, setisLoading] = useState(false)
const [isPreloader,setisPreloader]  = useState(false)
const [isLogin, setisLogin] = useState(false)
// /dashboard js
const [ishome, setisHome] = useState(false)
const [isprofile, setisProfile] = useState(false)
const [iscourse, setisCourse] = useState(false)
const [isstats, setisStats] = useState(false)
const [istest, setisTest] = useState(false)
const [ischat, setisChat] = useState(false)
const [islive, setisLive] = useState(false)
const [isnotify, setisNotify] = useState(false)

 //////////////////////////////////////
  const handleMenu =(e)=>{
  const txt = e.currentTarget.textContent;
  if(txt === 'Home'){
    setisHome(true);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(false)}
if(txt === 'Profile'){
    setisHome(false);setisProfile(true);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(false)}
if(txt === 'Courses'){
    setisHome(false);setisProfile(false);
    setisCourse(true); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(false)}
if(txt === 'Statistics'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(true);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(false)}
if(txt === 'Test drilling'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(true); setisChat(false);
    setisLive(false); setisNotify(false)}
if(txt === 'Chatroom'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(true);
    setisLive(false); setisNotify(false)}
if(txt === 'Live meeting'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(true); setisNotify(false)}
if(txt === 'Notification'){
    setisHome(false);setisProfile(false);
    setisCourse(false); setisStats(false);
    setisTest(false); setisChat(false);
    setisLive(false); setisNotify(true)} }
    
    ////////////////////logged user info///////////////////////// //
 const [loggeduser, setLoggeduser] = useState(users)
 const [userid, setUserid] = useState([])
 const [userimage, setUserimage] = useState([])
const [userfname, setUserfname] = useState([])
const [userlname, setUserlname] = useState([])
const [userdob, setUserdob] = useState([])
const [useremail, setUseremail] = useState([])
const [userpassword, setUserpassword] = useState([])
const [userstate, setUserstate] = useState([]) 
const [usercountry, setUsercountry] = useState([]) 
const [usergender, setUsergender] = useState([])
const [usercourse, setUsercourse] = useState([])

 //  /////////////set info//////////////////////////////
const loaduserinfo = ()=>{
  let avatar = loggeduser.map((user)=>{
    const {image} = user;
    return image
})
avatar =avatar[0]
setUserimage(avatar);

let id = loggeduser.map((user)=>{
  const {id} = user;
  return id
})
id =id[0]
setUserid(id);

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
const userinfo = loggeduser.map((user)=>{
  const {user_info} = user;
  return user_info
})
//console.log(userinfo);

let fname = userinfo.map((user)=>{
  const {firstname} = user;
  return firstname
})
fname =fname[0]
setUserfname(fname);

let lname = userinfo.map((user)=>{
  const {lastname} = user;
  return lastname
})
lname =lname[0]
setUserlname(lname);

let email = userinfo.map((user)=>{
  const {email} = user;
  return email
})
email =email[0]
setUseremail(email);

let password = userinfo.map((user)=>{
  const {password} = user;
  return password
})
password =password[0]
setUserpassword(password);

let dob = userinfo.map((user)=>{
  const {dateofbirth} = user;
  return dateofbirth
})
dob =dob[0]
setUserdob(dob);
}



useEffect(loaduserinfo,[loggeduser])
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

let [state, Dispatch] = useReducer(Reducer, initialState);
    return (   
  <AppContext.Provider value={{
    isLoading,
    setisLoading,
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
    handleMenu,
    userid, userimage, useremail, userstate, usercountry,
    userpassword, userfname, userlname, usergender,setLoggeduser,
    loggeduser, usercourse,userdob,
    questions, setQuestions
    
  }}>{children}</AppContext.Provider>
    )
}
 export const useGlobalContext = () =>{
    return useContext(AppContext) 
 }

export  {AppContext, AppProvider}