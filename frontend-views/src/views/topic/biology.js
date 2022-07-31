import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useRef } from "react";
import { useGlobalContext } from "../../controller/context_api";



const Biology = (props) => {
const {topicDropdown, isbio, userTopic} = useGlobalContext()
const topic = props.props

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

export default Biology