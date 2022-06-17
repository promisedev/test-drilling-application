import { useGlobalContext } from "../../controller/context_api";

const ChangeQuestion = (ele1)=>{

const { changeQuestion} = useGlobalContext();

    return (
<article className='test_question_control'>
         <div className="previous_questions"></div>
         <div className="next_questions" onClick={changeQuestion}>Next</div>   
        </article> 
    )
}

export default ChangeQuestion;