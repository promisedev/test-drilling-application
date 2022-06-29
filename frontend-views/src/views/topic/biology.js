import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useRef } from "react";
import { useGlobalContext } from "../../controller/context_api";



const Biology = () => {
const {topicDropdown, isbio, topic, userTopic} = useGlobalContext()


  return (
    <article className="single_topic">
        <div className="topic_title" >Biology
        <span className="topic_button" data-id='biology' onClick={(e)=>topicDropdown({e})}>
          {isbio?<ExpandLess/>:<ExpandMore/>}
        </span>
        </div>
        {/* //////////////////////////////// */}
        <div className="topic_list" style={isbio?{display:'block'}:{display:'none'}}>
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

export default Biology