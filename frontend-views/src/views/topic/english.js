import { useRef } from "react";
import { useGlobalContext } from "../../controller/context_api";
import {ExpandMore,ExpandLess} from  '@material-ui/icons'


const English = (props) => {
const {topicDropdown, iseng, userTopic} = useGlobalContext()
const topic = props.props
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

export default English