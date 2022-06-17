import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";

const QuestionGroup5 = ()=>{

  const {questions} = useGlobalContext();
    return  (
        <div className='test_question' style={{right:"-400%"}}  >
        {/* display question group */}
        <article className='test_question_body'>

        {
    questions.map((questions, index)=>{
    const {q} = questions;
    let questiongroup5 = index==40|index==41|index==42|index==43|index==44
    |index==45|index==46|index==47|index==48|index==49
    if(questiongroup5){
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
        <ChangeQuestion />
        </div>
    )
}

export default QuestionGroup5;