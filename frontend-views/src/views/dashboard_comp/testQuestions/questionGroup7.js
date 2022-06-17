import { useRef } from "react";
import { useGlobalContext } from "../../../controller/context_api";
import ChangeQuestion from "../changeQuestion";

const QuestionGroup7 = () => {

    const {questions} = useGlobalContext();
    return (
        <div className='test_question' style={{ right: "-600%" }}>
            {/* display question group */}
            <article className='test_question_body'>

                {
                    questions.map((questions, index) => {
                        const { q } = questions;
                        let questiongroup7 = index == 60 | index == 61 | index == 62 | index == 63 | index == 64
                            | index == 65 | index == 66 | index == 67 | index == 68 | index == 69
                        if (questiongroup7) {
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

export default QuestionGroup7;