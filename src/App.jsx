/* This is the main component of the Weather Snap web application, and it serves as the 
entry point for rendering all other components. */

import "./App.css";
import Search from "../components/search/search";
import Forecast from "../components/forecast/forecast";
import CurrentWeather from "../components/current-weather/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  // Initializing hooks to manage state
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);

  // Function to handle search changes
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    // Fetching current weather and forecast data for the selected location
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    // Resolving both promises and updating state accordingly
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responses) => {
        const weatherResponse = await responses[0].json();
        const forecastResponse = await responses[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setforecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(forecast); // Log the forecast data to console

  return (
    <>
      <div className="parent-container">
        <div className="container">
          <h1 className="app-title">Weather Snap</h1>
          <p className="app-subtitle">
            Your personalized weather forecast with OpenWeatherMap and RapidAPI
          </p>
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
    </>
  );
}

export default App;
