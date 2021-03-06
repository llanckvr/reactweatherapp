import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <span>{Math.round(props.celsius)}</span>
        <span className="units">
          ºC{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            |ºF{" "}
          </a>
        </span>{" "}
      </div>
    );
  } else {
    return (
      <div>
        <span>{Math.round((props.celsius * 9) / 5 + 32)}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            {" "}
            ºC{" "}
          </a>
          |ºF{" "}
        </span>{" "}
      </div>
    );
  }
}
