// useState is a React hook
import { useState } from "react";

function MoodChanger() {
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const [mood, setMood] = useState("happy");

  // Calls setMood with a fixed value of 'ecstatic'
  // begin with 'handle' prefix by convention
  const handleWinLotto = () => {
    setMood("ecstatic");
    console.log(mood) // will be the previous/old value, not 'ecstatic' 
    // since the re-render has been triggered but not yet completed
  };
  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood}
      {/* Change the mood state by calling setMood when a button is clicked */}
      {/* Using arrow functions */}
      <button onClick={() => setMood("tired")}> Stay Up Late</button>
      <button onClick={() => setMood("hungry")}> Skip Lunch </button>
      <button onClick={() => setMood("anxious")}> Drink Coffee </button>
      {/* Using custom event handler functions */}
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
      {/* ++ Add these buttons and some of your own to MoodChanger and try it out! */}
    </div>
  );
}

export default MoodChanger;
