import React, { useState } from "react";
import Game from "./Game";
import StartScreen from "./StartScreen";
import GameOverScreen from "./GameOverScreen";
import "./TypingGame.css";

const TypingGame = () => {
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState({ correct: 0, incorrect: 0, time: 0 });

  const handleGameStart = () => {
    setGameState("game");
  };

  const handleGameOver = () => {
    setGameState("over");
  };

  return (
    <div className="typing-game">
      <div className="game-container">
        {gameState === "start" && <StartScreen onStart={handleGameStart} />}
        {gameState === "game" && <Game onGameOver={handleGameOver} setScore={setScore} />}
        {gameState === "over" && <GameOverScreen score={score} onRestart={handleGameStart} />}
      </div>
    </div>
  );
};

export default TypingGame;
