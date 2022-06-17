import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";

const QuestionGroup8 = ()=>{

    const {questions} = useGlobalContext();
    return  (
        <div className='test_question' style={{right:"-700%"}} >
         {/* display question group */}
         <article className='test_question_body'>

{
    questions.map((questions, index) => {
        const { q } = questions;
        let questiongroup8 = index == 70 | index == 71 | index == 72 | index == 73 | index == 74
            | index == 75 | index == 76 | index == 77 | index == 78 | index == 79
        if (questiongroup8) {
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

export default QuestionGroup8;