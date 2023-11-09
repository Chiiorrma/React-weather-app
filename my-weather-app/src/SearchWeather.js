import React from "react";
import "./SearchWeather.css";
import ReactAnimatedWeather from 'react-animated-weather';

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
          <input type="submit" value="Search" class="btn btn-primary ms-3" />
          <input type="button" value="Current " class="btn btn-success ms-3" />
        </form>
        <div class="mt-4">Lisbon</div>
        <div>Thursday 11:05</div>
        <div>Clear Sky</div>
        <div class="row mt-3">
          <div class="col-md-6">
            <ReactAnimatedWeather
              icon='CLEAR_DAY'
              color="goldenrod"
              size={150}
              animate={true}
            />

            <span class="temperature fs-1">14</span>°C
          </div>
          <div class="col-md-6">
            <div>Percipiation: 80%</div>
            <div>Wind: 4km/h </div>
          </div>
          <div class="row mt-5">
            <div class="col-sm-2">
              Fri
              <p> <ReactAnimatedWeather
                icon='CLEAR_DAY'
                color="blue"
                size={150}
                animate={true}
              /></p>
              <p>13°</p>
            </div>
            <div class="col-sm-2">Sat
              <p> <ReactAnimatedWeather
                icon='PARTLY_CLOUDY_DAY'
                color="blue"
                size={150}
                animate={true}
              /></p>
              <p>20°</p>
            </div>
            <div class="col-sm-2">Sun
              <p> <ReactAnimatedWeather
                icon='CLEAR_DAY'
                color="red"
                size={150}
                animate={true}
              /></p>
              <p>23°</p>
            </div>
            <div class="col-sm-2">Mon
              <p> <ReactAnimatedWeather
                icon='CLEAR_DAY'
                color="yellow"
                size={150}
                animate={true}
              /></p>
              <p>25°</p>
            </div>
            <div class="col-sm-2">Tues
              <p> <ReactAnimatedWeather
                icon='CLOUD'
                color="green"
                size={150}
                animate={true}
              /></p>
              <p>23°</p>
            </div>
            <div class="col-sm-2">Wed
              <p> <ReactAnimatedWeather
                icon='RAIN'
                color="blue"
                size={150}
                animate={true}
              /></p>
              <p>27°</p>
            </div>
          </div>
          <div><a href="/">Opensource code</a>by Chioma Marycynthia</div>
        </div>
      </div>
    </div>
  )
}