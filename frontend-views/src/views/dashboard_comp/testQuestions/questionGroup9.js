import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";

const QuestionGroup9 = ()=>{

    const {questions, translateposition} = useGlobalContext();
    return  (
        <div className='test_question' style={{right:"-800%",
        transform: `translateX(-${translateposition}%)`}} >
         {/* display question group */}
         <article className='test_question_body'>

{
    questions.map((questions, index) => {
        const { q } = questions;
        let questiongroup9 = index == 80 | index == 81 | index == 82 | index == 83 | index == 84
            | index == 85 | index == 86 | index == 87 | index == 88 | index == 89
        if (questiongroup9) {
            return (
                <div className='test_single_question' key={index}>
                    <span>Q{index + 1}</span>
                    <article className="test_quiz">

                    </article>
                </div>
            )
        }
    })
}
</article>
{/* control next question group */}
<ChangeQuestion />
        </div>
    )
}

export default QuestionGroup9;