import { useState } from "react";
import React from "react";
import './App.css';
import { Question } from "./Question";

function App() {
  
  const [curquestion, setcurquestion] = useState(0);
  const[score,setscore]=useState(false);
  const[score1,setscore1]=useState(0);
  const handleanswer = (correct) => {
     
    const next = curquestion + 1;
    if(next<Question.length)
    {
        setcurquestion(next);
    }
    else{
      setscore(true);
    }
    
    if(correct === true)
    {
       setscore1(score1+1);
    }
  };
  return (
    <>
    <div className="container text-center  py-4">
        <h3 className="top ">Quiz App</h3>
    </div>
      <div className="app">   
        <div >
          {score ? (
            <div className="score-section"> Your Score is {score1} out of {Question.length}</div>
          ) : (
            <>
              <div className="question-section">
              <h5>General Knowlegde Question</h5>
                <div className="question-count">
                  <span >Question :{curquestion+1}/</span> {Question.length}
                </div>
                <div className="question-text">
                  {Question[curquestion].question}
                </div>
              </div>
              <div className="answer-section">
                {Question[curquestion].Answeroption.map((Answeroption) => (
                  <button onClick={()=>handleanswer(Answeroption.correct)}>{Answeroption.answertext}</button>
                ))}
                
              </div>
             
            </>
          )}
        
        </div>
      
      </div>
     
    </>
  );
}

export default App;
