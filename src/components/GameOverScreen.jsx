// GameOverScreen.jsx

import React from "react";
import "./GameOverScreen.css";

const GameOverScreen = ({ score, onRestart }) => {
  const accuracy = score.correct / (score.correct + score.incorrect) * 100;
  return (
    <div className="game-over-screen">
      <h1>Game Over!</h1>
      <p>Correct Count: {score.correct}</p>
      <p>Incorrect Count: {score.incorrect}</p>
      <p>Time Elapsed: {score.time} seconds</p>
      <p>Accuracy: {accuracy.toFixed(2)}%</p>
      <button className="restart-button" onClick={onRestart}>Restart Testing</button>
    </div>
  );
};

export default GameOverScreen;
