import React from "react";
import "./App.css";
import Loader from "react-loader-spinner";
import WeatherImage from "./weatherImage";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <form>
          <i className="fas fa-search "></i>
          <input
            id="city-input"
            type="text"
            placeholder="Search"
            className="location-search"
          />
        </form>
        <br />

        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <small id="actual-time" className="actual-time">
              {" "}
              MON 10:30 AM{" "}
            </small>
          </div>
          <div className="col-sm"></div>
        </div>
        <h1 id="city-name"> - </h1>
        <WeatherImage />

        <h2 className="main-temperature">
          {" "}
          <span>-</span> <span className="celsius">ºC </span>{" "}
          <span className="fahrenheit">|ºF </span>{" "}
        </h2>
        <p>
          {" "}
          <span className="actual-coverage"> - </span>
        </p>

        <div className="row">
          <div className="col-sm">
            <i className="fas fa-tint actual-humidity"></i>
            <br />
            <span> - </span>
          </div>
          <div className="col-sm">
            <i className="fas fa-wind actual-wind"></i>
            <br />
            <span>-</span>
          </div>
          <div className="col-sm">
            <i className="fas fa-cloud-showers-heavy actual-precipitation"></i>
            <br />
            <span> - </span>
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
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}

export default App;
