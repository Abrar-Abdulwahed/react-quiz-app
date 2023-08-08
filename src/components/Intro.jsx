import { useContext } from "react";
import { QuizContext } from "./Helpers/Context";
const Intro = () => {
    const { setGameState } = useContext(QuizContext);
  return (
    <div className="menu">
        <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  )
}

export default Intro
