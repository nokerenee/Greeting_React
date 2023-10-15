import { useState } from "react";

// Child component to display and convert temp if needed
function Temperature({ temp, units = "C" }) {
    // default to celcius
    // convert to Fahrenheit if units is F (or not C)
    let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;

    const [currentUnits, setCurrentUnits] = useState(units);

    const toggleUnits = () => {
      // Toggle between Celsius and Fahrenheit
      setCurrentUnits(currentUnits === "C" ? "F" : "C");
    };

    return (
      <span className="Temperature">
        <strong>
          {parseInt(displayTemp)}&deg;{currentUnits}
        </strong>
        <button onClick={toggleUnits}>Toggle Units</button>
      </span>
    );
  }
  
  export default Temperature;
  