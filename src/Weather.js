import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Loader from "react-loader-spinner";
import WeatherImage from "./weatherImage";
import { thisExpression } from "@babel/types";

export default class Weather extends Component {
  apiKey = "7ef85d788990126f9a396a0335757858";
  apiRoot = "https://api.openweathermap.org";
  state = { loaded: false };

  showResults = response => {
    this.setState({
      loaded: true,
      weather: {
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        date: "Monday 22:00",
        description: response.data.weather[0].description,
        precipitation: "0",
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed)
      }
    });
  };

  componentDidMount() {
    let apiUrl = `${this.apiRoot}/data/2.5/weather?q=${this.props.city}&appid=${this.apiKey}&units=metric`;
    axios.get(apiUrl).then(this.showResults);
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
                <span> {this.state.weather.humidity}% </span>
              </div>
              <div className="col-sm">
                <i className="fas fa-wind actual-wind"></i>
                <br />
                <span>{this.state.weather.wind} Km/h </span>
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
