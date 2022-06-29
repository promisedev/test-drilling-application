import { useGlobalContext } from "../../controller/context_api";

const ChangeQuestion = ()=>{

const { changeQuestion, submitQuestion,isend} = useGlobalContext();

    return (
<article className='test_question_control'>
         <div className="previous_questions"></div>
         {isend?<div className="next_questions" onClick={submitQuestion}>Finish/submit</div>:
          <div className="next_questions" onClick={changeQuestion}>Next</div>}  
        </article> 
    )
}

export default ChangeQuestion;