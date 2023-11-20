import React, { useEffect, useState } from "react";
import WeatherDailyForecast from "./WeatherDailyForecast";
import axios from "axios";
import "./WeatherForecast.css";


export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null)
  function getResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


    axios.get(apiUrl).then(getResponse);

  }

  useEffect(() => {
    setLoaded(false)
  }, [props.coordinates])

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index} >
                  < WeatherDailyForecast data={dailyForecast} />
                </div>
              )
            } else {
              return null;
            }
          })}
        </div>
      </div>)
  }
  else {
    load();
    return null;
  }
}