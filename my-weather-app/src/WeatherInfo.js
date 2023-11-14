import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {

  return (
    <div>
      <div>
        <FormattedDate date={props.weatherData.data} />
      </div>
      <div className="text-capitalize">Clear Sky</div>
      <div class="row mt-3">
        <div class="col-6">
          <div class="clearfix">
            <img src="" alt="Mostly Cloudy" class="float-left" />
            <WeatherTemperature />
          </div>
        </div>
        <div class="col-md-6">
          <ul>
            <li>Percipiation: 80%</li>
            <li>Wind: 4km/h</li>
          </ul>
        </div>
      </div>
    </div>
  )
}