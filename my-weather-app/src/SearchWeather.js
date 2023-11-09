import React from "react";
import "./SearchWeather.css";

export default function SearchWeather(props) {
  return (
    <div className="SearchWeather">
      <div class="weather-app mt-3">
        <div class="cities d-flex justify-content-start">
          <p class="me-2">Lagos</p>
          <p class="me-2">Rwanda</p>
          <p class="me-2">Accra</p>
          <p class="me-2">Cairo</p>
          <p class="me-2">Abuja</p>
        </div>
        <form>
          <input type="text" placeholder="Enter a city..." autocomplete="off" autofocus="on" />
          <input type="submit" value="Search" class="btn btn-primary" />
          <input type="button" value="Current " class="btn btn-success" />
        </form>
        <div class="mt-4">Lisbon</div>
        <div>Thursday 11:05</div>
        <div>Clear Sky</div>
        <div class="row mt-3">
          <div class="col-md-6">
            <span class="temperature fs-1">14</span>°C
          </div>
          <div class="col-md-6">
            <div>Percipiation: 80%</div>
            <div>Wind: 4km/h </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm-2">
              Fri
              <p>13°</p>
            </div>
            <div class="col-sm-2">Sat
              <p>13°</p>
            </div>
            <div class="col-sm-2">Sun
              <p>13°</p>
            </div>
            <div class="col-sm-2">Mon
              <p>13°</p>
            </div>
            <div class="col-sm-2">Tues
              <p>13°</p>
            </div>
            <div class="col-sm-2">Wed
              <p>13°</p>
            </div>
          </div>
          <div><a href="/">Opensource code</a>by Chioma Marycynthia</div>
        </div>
      </div>
    </div>
  )
}