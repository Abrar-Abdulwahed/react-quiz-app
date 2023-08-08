import { useContext } from "react";
import { QuizContext } from "./Helpers/Context";
const Results = () => {
  const { score, questions, setScore, setGameState, answers } = useContext(QuizContext);
  const restart = () => {
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className="result">
        <h6>Quiz Finished</h6>
        <p>Your score is: { score }  / {questions.length }</p>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Correct Answer</th>
              <th>Your Answer</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((answer, i) => (
              <tr key={i} className={questions[i].correct_answer == answer && "match"}>
                <td>{i + 1}</td>
                <td>{questions[i].correct_answer}</td>
                <td>{answer}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
        <button onClick={() => restart()}> Restart Quiz</button>
    </div>
  )
}

export default Results