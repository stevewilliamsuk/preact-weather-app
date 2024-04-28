import { useEffect, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(function() {
    console.log("useEffect fired")
    const weatherPromise = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m").then(function(response) {
      response.json().then(function(json) {
        console.log(json)
        setWeatherData({
          temperature: json.current.temperature_2m,
          temperatureUnit: json.current_units.temperature_2m
        })
        console.log(`Post Set: The current value of weather data is: ${JSON.stringify(weatherData)}}`)
      })
    })
    console.log(weatherPromise)
  }, []);

  console.log(`Pre Render: The current value of weather data is: ${JSON.stringify(weatherData)}}`)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact Weather Demo App</h1>
      { weatherData && (
        <div class="card">
          <p>Current temperature is { weatherData.temperature }{ weatherData.temperatureUnit }</p>
        </div>
      ) }
    </>
  )
}
