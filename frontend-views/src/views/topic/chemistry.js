import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useRef } from "react";
import { useGlobalContext } from "../../controller/context_api";

const Chemistry = () => {
const {topicDropdown, ischem, topic, userTopic} = useGlobalContext()


  return (
    <article className="single_topic">
        <div className="topic_title" >Chemistry
        <span className="topic_button" data-id='chemistry' onClick={(e)=>topicDropdown({e})}>
          {ischem?<ExpandLess/>:<ExpandMore/>}
        </span>
        </div>
        {/* //////////////////////////////// */}
        <div className="topic_list" style={ischem?{display:'block'}:{display:'none'}}>
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

export default Chemistry