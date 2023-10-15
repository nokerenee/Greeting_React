import { useState } from "react";

function Emoji() {
  const [mood, changeMood] = useState("😊");

  return (
    <div className="Emoji componentBox">
      Current Mood: {mood}
      {/* Change the mood state by calling setMood when a button is clicked */}
      {/* Using arrow functions */}
      <button onClick={() => changeMood("🥱")}> Tired </button>
      <button onClick={() => changeMood("😠")}> Angry </button>
      <button onClick={() => changeMood("😢")}> Sad </button>

    </div>
  );
}

export default Emoji;
