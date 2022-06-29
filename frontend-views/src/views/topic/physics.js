import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useRef } from "react";
import { useGlobalContext } from "../../controller/context_api";



const Physics = () => {
const {topicDropdown, isphy, topic, userTopic} = useGlobalContext()


  return (
    <article className="single_topic">
        <div className="topic_title" >Physics
        <span className="topic_button" data-id='physics' onClick={(e)=>topicDropdown({e})}>
          {isphy?<ExpandLess/>:<ExpandMore/>}
        </span>
        </div>
        {/* //////////////////////////////// */}
        <div className="topic_list"  style={isphy?{display:'block'}:{display:'none'}}>
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

export default Physics