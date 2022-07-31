import {useRef,useEffect} from 'react'
const Loading = ()=>{

const bg_nav1 = useRef(null)
const bg_nav2 = useRef(null)
const bg_nav3 = useRef(null)
const bg_nav4 = useRef(null)

const bg_action1 = useRef(null)
const bg_action2 = useRef(null)


const bg_items4 = useRef(null)
const bg_items5 = useRef(null)
const bg_items6 = useRef(null)
const bg_items7 = useRef(null)
const bg_items8 = useRef(null)
const bg_items9 = useRef(null)
const bg_items10 = useRef(null)
const bg_items11 = useRef(null)
const bg_items12 = useRef(null)
const bg_items13 = useRef(null)
const bg_items14 = useRef(null)
const bg_items15 = useRef(null)
const bg_items16 = useRef(null)
const bg_items17 = useRef(null)

const bg_fbar1 = useRef(null)
const bg_fbar2 = useRef(null)
const bg_fbar3 = useRef(null)

 const bg_rbar1 = useRef(null)
 const bg_rbar2 = useRef(null)
 const bg_rbar3 = useRef(null)
 const bg_rbar4 = useRef(null)
 const bg_rbar5 = useRef(null)
 const bg_rbar6 = useRef(null)
 const bg_rbar7 = useRef(null)
 const bg_rbar8 = useRef(null)
 const bg_rbar9 = useRef(null)
const bg_rbar10 = useRef(null)
const bg_rbar11 = useRef(null)
const bg_rbar12 = useRef(null)
 const bg_search = useRef(null)

// /////////////////////////
useEffect( 
 ()=>{ 
   // getting all the elements


const nav1 = bg_nav1.current;
const nav2 = bg_nav2.current;
const nav3 = bg_nav3.current;
const nav4 = bg_nav4.current;


const action1  = bg_action1.current;
const action2  = bg_action2.current;

const ava_img = bg_items4.current;
const ava_name  = bg_items5.current;
const desc1 = bg_items6.current;
const desc2 = bg_items7.current;
const contr = bg_items8.current;
const menu_item1 = bg_items9.current;
const menu_item2 = bg_items10.current;
const menu_item3 = bg_items11.current;
const menu_item4 = bg_items12.current;
const menu_item5 = bg_items13.current;
const menu_item6 = bg_items14.current;
const menu_item7 = bg_items15.current;
const menu_item8 = bg_items16.current;
const menu_btn = bg_items17.current;
const f_bar1 = bg_fbar1.current;
const f_bar2 = bg_fbar2.current;
const f_bar3 = bg_fbar3.current;

const rol_bar1 = bg_rbar1.current;
const rol_bar2 = bg_rbar2.current;
const rol_bar3 = bg_rbar3.current;
const rol_bar4 = bg_rbar4.current;
const rol_bar5 = bg_rbar5.current;
const rol_bar6 = bg_rbar6.current;
const rol_bar7 = bg_rbar7.current;
const rol_bar8 = bg_rbar8.current;
const rol_bar9 = bg_rbar9.current;
const rol_bar10 = bg_rbar10.current;
const rol_bar11 = bg_rbar11.current;
const rol_bar12 = bg_rbar12.current;
  const search = bg_search.current;
const ChangeColor = () => {   
  
// create function


search.classList.toggle('change_color');

nav1.classList.toggle('change_color');
nav2.classList.toggle('change_color');
nav3.classList.toggle('change_color');
nav4.classList.toggle('change_color');


action1.classList.toggle('change_color');
action2.classList.toggle('change_color');

ava_img.classList.toggle('change_color');
ava_name.classList.toggle('change_color');
desc1.classList.toggle('change_color');
desc2.classList.toggle('change_color');
contr.classList.toggle('change_color');
menu_item1.classList.toggle('change_color');
menu_item2.classList.toggle('change_color');
menu_item3.classList.toggle('change_color');
menu_item4.classList.toggle('change_color');
menu_item5.classList.toggle('change_color');
menu_item6.classList.toggle('change_color');
menu_item7.classList.toggle('change_color');
menu_item8.classList.toggle('change_color');
menu_btn.classList.toggle('change_color');
f_bar1.classList.toggle('change_color');
f_bar2.classList.toggle('change_color');
f_bar3.classList.toggle('change_color');

rol_bar1.classList.toggle('change_color');
rol_bar2.classList.toggle('change_color');
rol_bar3.classList.toggle('change_color');
rol_bar4.classList.toggle('change_color');
rol_bar5.classList.toggle('change_color');
rol_bar6.classList.toggle('change_color');
rol_bar7.classList.toggle('change_color');
rol_bar8.classList.toggle('change_color');
rol_bar9.classList.toggle('change_color');
rol_bar10.classList.toggle('change_color');
rol_bar11.classList.toggle('change_color');
rol_bar12.classList.toggle('change_color');
}
// /setinterval
setInterval(ChangeColor,1000)

clearInterval(ChangeColor,1000)
},[])


//
    
    return (
        
        <section className='loading_container'>
          <article className='navigation_div'>
        <div className='logo_div'><img src={'../../../../graphics/logo1.ico'} alt='logo' className='nav_logo'/></div>
        {/* //////////////////// */}
        <div className='search_div'>
          <article className='search_item' ref={bg_search}></article>
        </div>
        {/* //////////////////// */}
        <div className='nav_div'>
          <article className='nav_item' ref={bg_nav1}></article>
          <article className='nav_item' ref={bg_nav2}></article>
          <article className='nav_item' ref={bg_nav3}></article>
          <article className='nav_item' ref={bg_nav4}></article>
        </div>
        {/* //////////////////// */}
        <div className='action_div'>
          <article className='action_item' ref={bg_action1}></article>
          <article className='action_item' ref={bg_action2}></article>
        </div>
        </article>
          {/* ////////////////////////////////////////////////////////////////// */}
        <article className='loading_body'>
        <div className='l_menu'>
          <article className='menu_head'><div className='txt'>WORKSPACE</div> </article>
          {/* ///////////////////////////////////////////////////////////////// */}
          <article className='menu_avatar'>
            <div className='segment1'>
              <article className='avatar_image' ref={bg_items4}></article>
              <article className='avatar_name' ref={bg_items5}></article>
            </div>
            {/* ////////////////////////////// */}
            <div className='segment2'>
              <article className='desc1' ref={bg_items6}></article>
              <article className='desc2' ref={bg_items7}></article>
            </div>
            {/* //////////////////////////////// */}
            <div className='segment3'>
              <article className='contr' ref={bg_items8}></article>
            </div>
            {/* ////////////////////////// */}
           </article>
          {/* //////////////////////////////////////////////////////////////////////// */}
          <article className='menu_list'>
            <div className='menu_items'>
              <article className='menu_item1' ref={bg_items9}></article>
              <article className='menu_item2' ref={bg_items10}></article>
              <article className='menu_item3' ref={bg_items11}></article>
              <article className='menu_item4' ref={bg_items12}></article> 
              <article className='menu_item5' ref={bg_items13}></article>
              <article className='menu_item6' ref={bg_items14}></article>
              <article className='menu_item7' ref={bg_items15}></article>
              <article className='menu_item8' ref={bg_items16}></article>
            </div>
            {/* /////////////////////////////////////////////////////////// */}
            <div className='menu_log'>
              <article className='menu_button' ref={bg_items17}></article>
              </div>
           </article>
        </div> 
        {/* /////////////////right content/////////////////////////////////// */}
        <div className='nl_content'>
          <article className='column1'>
            <div className='col1_rol1'>
              <article className='f_bar1' ref={bg_fbar1}></article>
              <article className='f_bar2' ref={bg_fbar2}></article>
            </div>
            {/* ////////////////////// */}
            <div className='col1_rol2'>
              <article className='f_bar1' ref={bg_fbar3}></article>
            </div>
          </article>
          {/* //////////////////// */}
          <article className='column2'>
          <div className='col2_rol'>
          <article className='rol_bar1' ref={bg_rbar1}></article>
          <article className='rol_bar2' ref={bg_rbar2}></article>
          <article className='rol_bar3' ref={bg_rbar3}></article>
          </div>
          {/* /////////////////////////////////////////////////////// */}
          <div className='col2_rol'>
          <article className='rol_bar1'  ref={bg_rbar4}></article>
          <article className='rol_bar2' ref={bg_rbar5}></article>
          <article className='rol_bar3' ref={bg_rbar6}></article>
          </div>
          {/* /////////////////////////////////////////////////////// */}
          <div className='col2_rol'>
          <article className='rol_bar1' ref={bg_rbar7}></article>
          <article className='rol_bar2' ref={bg_rbar8}></article>
          <article className='rol_bar3' ref={bg_rbar9}></article>
          </div>
          {/* /////////////////////////////////////////////////////// */}
          <div className='col2_rol'>
          <article className='rol_bar1' ref={bg_rbar10}></article>
          <article className='rol_bar2' ref={bg_rbar11}></article>
          <article className='rol_bar3' ref={bg_rbar12}></article>
          </div>
          {/* /////////////////////////////////////////////////////// */}
          </article>
        </div>
        </article>
        </section>
    )
}

export default Loading;