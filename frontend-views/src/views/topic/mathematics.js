import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useRef } from "react";
import { useGlobalContext } from "../../controller/context_api";



const Mathematics = () => {
const {topicDropdown,ismath, topic, userTopic} = useGlobalContext()

  return (
    <article className="single_topic">
        <div className="topic_title" >Mathematics
        <span className="topic_button" data-id='mathematics' onClick={(e)=>topicDropdown({e})}>
          {ismath?<ExpandLess/>:<ExpandMore/>}
        </span>
        </div>
        {/* //////////////////////////////// */}
        <div className="topic_list" style={ismath?{display:'block'}:{display:'none'}}>
          {
               topic.map((item)=>{
                const {id,name} =item;
                return (
                  <article className='user_topic' data-id={id} onClick={(e)=>userTopic({e})}>
                    {name} </article>
                ) 
               })
          }
        </div>
    </article>
  )
}

export default Mathematics