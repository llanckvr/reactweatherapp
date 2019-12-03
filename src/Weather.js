import React, { useState } from "react";
import axios from "axios";
import HumanDate from "./HumanDate";
import "./App.css";
import Loader from "react-loader-spinner";
import WeatherImage from "./weatherImage";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function showResults(response) {
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      timestamp: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      precipitation: 0,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed)
    });
    setReady(true);
  }

  function search() {
    const apiKey = `7ef85d788990126f9a396a0335757858`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResults);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="Container">
          <form onSubmit={handleSubmit}>
            <i className="fas fa-search "></i>
            <input
              type="search"
              placeholder="Search"
              className="location-search"
              onChange={handleChangeCity}
            />
          </form>
          <br />

          <div className="row">
            <div className="col-sm"></div>
            <div className="col-sm">
              <small className="actual-time">
                {" "}
                <HumanDate date={weather.timestamp} />{" "}
              </small>
            </div>
            <div className="col-sm"></div>
          </div>
          <h1> {weather.city} </h1>
          <WeatherImage />

          <h2 className="main-temperature">
            {" "}
            <span> {weather.temperature} </span>{" "}
            <span className="celsius">ºC </span>{" "}
            <span className="fahrenheit">|ºF </span>{" "}
          </h2>
          <p>
            {" "}
            <span className="actual-coverage"> {weather.description} </span>
          </p>

          <div className="row">
            <div className="col-sm">
              <small>Humidity</small>
              <br />
              <span> {weather.humidity}% </span>
            </div>
            <div className="col-sm"></div>
            <div className="col-sm">
              <small>Wind</small>
              <br />
              <span>{weather.wind} Km/h </span>
            </div>
          </div>
        </div>

        <footer>
          <small>
            <a
              className="App-link"
              href="https://reactjs.orghttps://github.com/llanckvr/reactweatherapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open source Code
            </a>
            <p>By Laure-Anne Lanckvrind</p>
          </small>
        </footer>
      </div>
    );
  } else {
    search();

    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
