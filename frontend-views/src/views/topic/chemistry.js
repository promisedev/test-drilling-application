import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useRef } from "react";
import { useGlobalContext } from "../../controller/context_api";
import Topics from "../topics";

const Chemistry = (props) => {
const {topicDropdown, ischem,  userTopic} = useGlobalContext()
const topic =props.props

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
               topic.map((item,index)=>{
                const {_id,topic} =item;
                return (
                  <article className='user_topic' data-id={_id} onClick={(e)=>userTopic({e})} key={index}>
                    {topic} </article>
                ) 
               })
          }
        </div>
    </article>
  )
}

export default Chemistry