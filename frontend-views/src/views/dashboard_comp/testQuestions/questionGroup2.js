import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";



const QuestionGroup2 = ()=>{
    
    
    const {questions, translateposition} = useGlobalContext();
    return  (
        <div className='test_question' style={{right:"-100%",
        transform: `translateX(-${translateposition}%)`}} >
{/* display question group */}
<article className='test_question_body'>

{
questions.map((questions, index)=>{
const {q} = questions;
let questiongroup2 = index==10|index==11|index==12|index==13|index==14
|index==15|index==16|index==17|index==18|index==19
if(questiongroup2){
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

export default QuestionGroup2;