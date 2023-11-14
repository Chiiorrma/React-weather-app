import React from "react";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setTemperature(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function search() {
    let apiKey = Cd173a006b0e51dac58c6d8064c94178;
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

  return (
    <div className="container">
      <div class="weather mt-3">
        <form onsubmit={handleSubmit}>
          <div class="row">
            <div class="col-9">
              <input type="text" placeholder="Enter a city..." autocomplete="off" autofocus="on" class="form-control"
                onChange={updateCity} />
            </div>
            <div class="col-3">
              <input type="submit" value="Search" class="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    </div>
  )
}