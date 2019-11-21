import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <div className="Container">
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
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    </div>
  );
}

export default App;
