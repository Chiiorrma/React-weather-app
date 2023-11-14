import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {

  return (
    <div>
      <h1 class="mt-4">{props.data.city}</h1>
      <div>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="text-capitalize">{props.data.description}</div>
      <div class="row mt-3">
        <div class="col-6">
          <div className="clear-fix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsuis={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <ul>
          <li>Humidity:{props.data.humidity}%</li>
          <li>Wind:{props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  )
}