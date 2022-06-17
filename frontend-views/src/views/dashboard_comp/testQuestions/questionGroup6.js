import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";

const QuestionGroup6 = ()=>{

  
  const {questions} = useGlobalContext();
    return  (
        <div className='test_question' style={{right:"-500%"}} >
        {/* display question group */}
        <article className='test_question_body'>

        {
    questions.map((questions, index)=>{
    const {q} = questions;
    let questiongroup6 = index==50|index==51|index==52|index==53|index==54
    |index==55|index==56|index==57|index==58|index==59
    if(questiongroup6){
      return (
          <div className='test_single_question' key={index}>
            <span>Q{index+1}</span>
            <article className="test_quiz">

            </article>
        </div>
      ) } 
    })
}
        </article>
        {/* control next question group */}
        <ChangeQuestion/>
        </div>
    )
}

export default QuestionGroup6;