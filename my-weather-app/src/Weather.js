import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {

    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon
    });
  }

  function search() {
    let apiKey = "Cd173a006b0e51dac58c6d8064c94178";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search()
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready)
    return (
      <div className="container">
        <div className="Weather mt-3">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input type="text" placeholder="Enter a city..." autoComplete="off" autoFocus="on" className="form-control"
                  onChange={updateCity} />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );

  else {
    search();
    return "Loading...";
  }

}
