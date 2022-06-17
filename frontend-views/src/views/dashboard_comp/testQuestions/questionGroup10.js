import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";

const QuestionGroup10 = ()=>{

    const {questions} = useGlobalContext();
    return  (
        <div className='test_question' style={{right:"-900%"}} >
         {/* display question group */}
         <article className='test_question_body'>

{
    questions.map((questions, index) => {
        const { q } = questions;
        let questiongroup10 = index == 90 | index == 91 | index == 92 | index == 93 | index == 94
            | index == 95 | index == 96 | index == 97 | index == 98 | index == 99
        if (questiongroup10) {
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

export default QuestionGroup10;