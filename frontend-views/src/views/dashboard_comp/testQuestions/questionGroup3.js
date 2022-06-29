import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";

const QuestionGroup3 = ()=>{

    const {questions,translateposition} = useGlobalContext();
    return  (
        <div className='test_question' style={{right:"-200%",
        transform: `translateX(-${translateposition}%)`}} >
            {/* display question group */}
        <article className='test_question_body'>

{
questions.map((questions, index)=>{
const {q} = questions;
let questiongroup3 = index==20|index==21|index==22|index==23|index==24
|index==25|index==26|index==27|index==28|index==29
if(questiongroup3){
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

export default QuestionGroup3;