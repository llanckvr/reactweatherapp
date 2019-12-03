import React, { Component } from "react";
import "./App.css";
import Loader from "react-loader-spinner";
import WeatherImage from "./weatherImage";

export default class Weather extends Component {
  state = { loaded: false };

  componentDidMount() {
    this.setState({
      loaded: true,
      weather: {
        city: "Lisbon",
        temperature: 20,
        date: "Monday 22:00",
        description: "Partially cloudy",
        precipitation: "0",
        humidity: "0",
        wind: "0"
      }
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="Weather">
          <div className="Container">
            <form>
              <i className="fas fa-search "></i>
              <input
                type="text"
                placeholder="Search"
                className="location-search"
              />
            </form>
            <br />

            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm">
                <small className="actual-time">
                  {" "}
                  {this.state.weather.date}{" "}
                </small>
              </div>
              <div className="col-sm"></div>
            </div>
            <h1> {this.state.weather.city} </h1>
            <WeatherImage />

            <h2 className="main-temperature">
              {" "}
              <span> {this.state.weather.temperature} </span>{" "}
              <span className="celsius">ºC </span>{" "}
              <span className="fahrenheit">|ºF </span>{" "}
            </h2>
            <p>
              {" "}
              <span className="actual-coverage">
                {" "}
                {this.state.weather.description}{" "}
              </span>
            </p>

            <div className="row">
              <div className="col-sm">
                <i className="fas fa-tint actual-humidity"></i>
                <br />
                <span> {this.state.weather.humidity} </span>
              </div>
              <div className="col-sm">
                <i className="fas fa-wind actual-wind"></i>
                <br />
                <span>{this.state.weather.wind}</span>
              </div>
              <div className="col-sm">
                <i className="fas fa-cloud-showers-heavy actual-precipitation"></i>
                <br />
                <span> {this.state.weather.precipitation} </span>
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
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
