import { useState, useEffect } from 'react'
import Navigation from '../navigation'
import dashmenu from './dashmenu.json'
import DashbordMenu from './dashboard_menu'
import QuestionGroup1 from './testQuestions/questionGroup1'
import QuestionGroup2 from './testQuestions/questionGroup2'
import QuestionGroup3 from './testQuestions/questionGroup3'
import QuestionGroup4 from './testQuestions/questionGroup4'
import QuestionGroup5 from './testQuestions/questionGroup5'
import QuestionGroup6 from './testQuestions/questionGroup6'
import QuestionGroup7 from './testQuestions/questionGroup7'
import QuestionGroup8 from './testQuestions/questionGroup8'
import QuestionGroup9 from './testQuestions/questionGroup9'
import QuestionGroup10 from './testQuestions/questionGroup10'
import { useGlobalContext } from '../../controller/context_api'


const TestDashboard = () => {
 const {questions} = useGlobalContext()

    return (
        <section className='dash_container'>
            <Navigation />
            {/* ////////////////////////////////////////////////////////////////// */}
            <article className='dash_body'>

                <DashbordMenu />
                {/* /////////////////right content/////////////////////////////////// */}
                <div className='dash_l_content'>
                    <article className='test_control'>
                        <div className='test_action_cont'>
                            <article className='test_st'>
                                <div className='test_start'>Start</div>
                                <div className='test_submit'>Finish/submit</div>
                            </article>

                            <article className='test_ts'>
                                <div className='test_time'>Count down: 1:30:59</div>
                                <div className='test_score'>Score: ---</div>
                            </article>
                        </div>
                        {/* /////////////////////////////// */}
                        <div className='test_action_questions'>
                            {
                            questions.map((questions, index)=>{
                              const {q} = questions;
                              return (
                                  <div className='single_question' key={index}>{q}</div>
                              )  
                            })
                        }
                        </div>
                    </article>
                    {/* ///////////////////////// */}
                    <article className='test_question_cont'>
                    <QuestionGroup1/>
                    <QuestionGroup2/>
               <QuestionGroup3/>  
                <QuestionGroup4/>
                <QuestionGroup5/>
                <QuestionGroup6/>
                <QuestionGroup7/>
                <QuestionGroup8/>
                <QuestionGroup9/>
                <QuestionGroup10/>      
                    
                    </article>

                </div>
            </article>
        </section>
    )
}

export default TestDashboard;

// {
//     questions.map((questions, index)=>{
//     const {q} = questions;
//     let questiongroup1 = index==0|index==1|index==2|index==3|index==4
//     |index==5|index==6|index==7|index==8|index==9


//     if(questiongroup1){
//       return (
//           <div className='single_question' key={index}>
            
//             </div>
//       ) } 
//     })
// }