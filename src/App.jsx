import { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Intro from './components/Intro';
import { QuizContext } from './components/Helpers/Context';
import './App.css'

function App() {
  const [gameState, setGameState] = useState("menu");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean');
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore, questions, answers, setAnswers}}>
        {gameState === "menu" && <Intro />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "result" && <Results />}
      </QuizContext.Provider>
    </div>
  )
}

export default App
