import React from 'react';
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 class="text-center">
          My Weather App
        </h1>
        <Weather defaultCity="New York" />
        <footer><a href="/" target='_blank' rel='noreferrer'> Open-source code</a> by Chioma Marycynthia</footer>
      </div>
    </div>
  );
}

export default App;
