import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";
 

 
const QuestionGroup1 = ()=>{
 
const {questions, translateposition} = useGlobalContext();
console.log(translateposition);
    return  (
        <div className='test_question' style={{right:"0%",
        transform: `translateX(-${translateposition}%)`}}  >
            {/* display question group */}
        <article className='test_question_body'>

        {
    questions.map((questions, index)=>{
    const {q} = questions;
    let questiongroup1 = index==0|index==1|index==2|index==3|index==4
    |index==5|index==6|index==7|index==8|index==9
    if(questiongroup1){
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

export default QuestionGroup1;

