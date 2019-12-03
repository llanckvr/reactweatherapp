import React, { Component } from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "./App.css";
import Loader from "react-loader-spinner";
import WeatherImage from "./weatherImage";

export default function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}
