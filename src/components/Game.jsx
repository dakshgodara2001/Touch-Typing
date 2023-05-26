import React, { useState, useEffect } from "react";
import "./Game.css";


const Game = ({ onGameOver, setScore }) => {
  const [targetChar, setTargetChar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    generateTargetChar();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTime) => {
        const newTime = prevTime + 1;
        
        if (newTime >= 300) {
          clearInterval(timer);
          setScore({ correct: correctCount, incorrect: incorrectCount, time: newTime });
          onGameOver();
        }

        return newTime;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onGameOver, setScore, correctCount, incorrectCount]);


  const generateTargetChar = () => {
    const characters = "asdfjkl;";
    const randomIndex = Math.floor(Math.random() * characters.length);
    setTargetChar(characters[randomIndex]);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    if (e.target.value === targetChar) {
      setCorrectCount((prevCount) => prevCount + 1);
      setUserInput("");
      generateTargetChar();
    } else if (e.target.value.length === targetChar.length && e.target.value !== targetChar) {
      setIncorrectCount((prevCount) => prevCount + 1);
      setUserInput("");
      generateTargetChar();
    }
  };

  useEffect(() => {
    if (incorrectCount >= 3) {
      setScore({ correct: correctCount, incorrect: incorrectCount, time: timeElapsed });
      onGameOver();
    }
  }, [incorrectCount, correctCount, timeElapsed, onGameOver, setScore]);

  return (
    <div className="game-container">
      <h1 className="game-info">Type The Character:</h1>
      <span className="game-character">{targetChar}</span>
      <input
        className="game-input"
        type="text"
        value={userInput}
        onChange={handleInputChange}
      />
      <div className="game-score">
        <p>Correct Count: {correctCount}</p>
        <p>Incorrect Count: {incorrectCount}</p>
        <p>Time Elapsed: {timeElapsed} Seconds</p>
      </div>
    </div>
  );
};

export default Game;
