import React from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsuis");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function displayCelsuis(event) {
    event.preventDefault();
    setUnit("celsuis");
  }
  function farenheit() {
    return (props.celsuis * 9) / 5 + 32;
  }
  if (unit === "celsuis") {
    return (
      <div>
        <span class="temperature "> {math.round(props.celsuis)} </span>
        <span class="unit ">°C |
          <a href="/" onClick={displayFahrenheit}>°F</a>
        </span>
      </div >
    )
  }
  else {

    return (
      <div>
        <span class="temperature "> {math.round(farenheit())} </span>
        <span class="unit "><a href="/" onClick={displayCelsuis}>°C |</a> °F
        </span>
      </div>
    )
  }
}