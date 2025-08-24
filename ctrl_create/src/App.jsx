import { useState } from "react";
import "./App.css";

export default function GlitchReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black">
      
      {/* Logo & Subtitle */}
      <div className="mb-6">
        <div className="logo ">
          <img src="hachi.png"
          className="logo-small"/>
        </div>
        <div className="subtitle">GLITCH CET PRESENTS</div>
      </div>

      {/* Reveal Button */}
      {!revealed ? (
        <button onClick={() => setRevealed(true)} className="button-glow">
          REVEAL
        </button>
      ) : (
        <div className="flex flex-col items-center space-y-6">
          {/* Event Image */}
          <img
            src="/ctrl_create.png" // Replace with your image path
            alt="Event Poster"
            className="small-img zoom-in"
          />

          {/* Event Text */}
          <div className="fade-in-delay flex flex-col items-center space-y-4 max-w-2xl text-center">
            <h1 className="text-4xl font-bold glow-cyan">
              🚀 Glitch 30-Day Challenge
            </h1>
            <h2 className="text-lg font-bold glow-pink">
              Gaming Club Presents
            </h2>
            <p className="text-xl glow-purple">
              A 30-day game development challenge to bring your ideas to life.  
              Take on the competition and rise through the leaderboard, with mentors available to guide you and clear your doubts.  
              Exciting prizes await at the top! 🎮🔥
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
