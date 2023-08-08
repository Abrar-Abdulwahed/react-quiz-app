import { useState, useContext } from "react";
import { QuizContext } from "./Helpers/Context";
import Options from "./Options";
const Quiz = () => {
    const { setScore, questions, setAnswers, answers, setGameState } = useContext(QuizContext);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const nextQuestion = (question, answer) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = answer;
      setAnswers(newAnswers);
      if (question.correct_answer.toLowerCase() === answer.toLowerCase()) {
          setScore(score => score + 1);
      }
      setCurrentQuestion(currentQuestion => currentQuestion + 1);
      if(currentQuestion === questions.length - 1)
        setGameState("result")
    };

    const renderQuizQuestions = () => {
        return(
          <div>
            <h3>Question {currentQuestion + 1}:</h3>
            <p>{ questions[currentQuestion].question }</p>
            <Options index={currentQuestion} setCurrentAnswer={setCurrentAnswer}/>
          </div>
        );
    };

    return (
        <div className="quiz">
            {renderQuizQuestions()}
            {currentQuestion === questions.length - 1 ?
            (<button onClick={() => nextQuestion(questions[currentQuestion], currentAnswer)}>Submit</button>):
            (<button onClick={() => nextQuestion(questions[currentQuestion], currentAnswer)}>Next</button>)}
        </div>
    );
}

export default Quiz