import React from "react";
import "./StartScreen.css";

const StartScreen = ({ onStart }) => (
  <div className="start-screen">
    <button className="start-button" onClick={onStart}>Start Touch Typing</button>
  </div>
);

export default StartScreen;
