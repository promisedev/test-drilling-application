import { useRef } from "react";
import { useGlobalContext } from "../../controller/context_api";
import {ExpandMore,ExpandLess} from  '@material-ui/icons'


const English = () => {
const {topicDropdown, iseng, topic, userTopic} = useGlobalContext()

  return (
    <article className="single_topic">
        <div className="topic_title" >English
        <span className="topic_button" data-id='english' onClick={(e)=>topicDropdown({e})}>
{iseng?<ExpandLess/>:<ExpandMore/>}
        </span>
        </div>
        {/* //////////////////////////////// */}
        <div className="topic_list" style={iseng?{display:'block'}:{display:'none'}}>
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

export default English