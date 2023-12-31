import React from "react";
import Weather from "./Weather.js";
import './App.css';

function App() {
  return (
    <div className="App" >
      <div className="container">
        <h1 className="text-center">
          My Weather App
        </h1>
        <Weather defaultCity="Lagos" />
        <footer><a href="https://github.com/Chiiorrma/React-weather-app" target='_blank' rel='noreferrer'> Open-source code</a> by Chioma Marycynthia</footer>
      </div>
    </div>
  );
}

export default App;
