# Weather Snap

Weather Snap is a sleek and minimalist weather forecast app built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [Framer Motion](https://www.framer.com/). It leverages the power of OpenWeatherMap and RapidAPI to provide accurate and up-to-date weather information for any location around the world.

![Tutorial](https://github.com/Sharjeel-Riaz/React/blob/main/Projects/weather-snap/public/Tutorial.gif?raw=true)

## Features

- 🌤️ Personalized weather forecast
- 📍 Location-based search
- 📅 7-day forecast
- 🎨 Dynamic backgrounds
- 🕰️ Real-time weather updates
- 📊 Detailed weather information
- 🌡️ Temperature in Celsius and Fahrenheit
- 🚀 Fast and responsive performance, powered by Vite

## Usage

This section explains on how you can create your own local environment for
[Weather Snap](https://github.com/Sharjeel-Riaz/Weather-Snap).

- Go to OpenWeatherMap's website, make your account and open the following page:
  [API Keys](https://home.openweathermap.org/api_keys)
- Generate your api key and save it somewhere as you'll need it later.
- Now head over to RapidApi's website, make your account and open the following
  page: [API Keys](https://rapidapi.com/wirefreethought/api/geodb-cities/)
- Select JavaScript's fetch method and save the `X-RapidAPI-Key` as you'll need
  it later as well.
- Now after forking or cloning the project, go inside the project folder and create a file named ".env". This is also known as environment variables where you will make use of your API keys.
- Add the following into your newly created `.env` file:

```
VITE_RAPID_API_KEY = "Your Rapid API key without double quotes (Quotes are just to grab your attention)."

VITE_WEATHER_API_KEY = "Your OpenWeatherMap API key without double quotes (Quotes are just to grab your attention)."
```

- Open the terminal at the directory where you have the project and run `npm
install` to download all the necessary dependencies

- Now run `npm run dev` to open the local environment

- Feel free to use it or make any necessary modifications `:D`

## Deployment

- Visit the production envrionment here 👉🏻 [Weather Snap](https://weather-snap.vercel.app/)
