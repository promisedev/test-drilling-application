import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";

const QuestionGroup4 = ()=>{

  
  const {questions, translateposition} = useGlobalContext();
    return  (
        <div className='test_question' style={{right:"-300%",
        transform: `translateX(-${translateposition}%)`}} >
        {/* display question group */}
        <article className='test_question_body'>

        {
    questions.map((questions, index)=>{
    const {q} = questions;
    let questiongroup4 = index==30|index==31|index==32|index==33|index==34
    |index==35|index==36|index==37|index==38|index==39
    if(questiongroup4){
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

export default QuestionGroup4;