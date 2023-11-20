import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {

  return (
    <div className="WeatherInfo">
      <h1 className="mt-4">{props.data.city}</h1>
      <div>
        <FormattedDate date={props.data.date} />
      </div>
      <div className="text-capitalize">{props.data.description}</div>
      <div className="row mt-3">
        <div className="col-6">
          <div >
            <div >
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div >
              <WeatherTemperature celsuis={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
