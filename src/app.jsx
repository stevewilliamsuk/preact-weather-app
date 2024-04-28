import { useEffect, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(async function() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
    const weatherJson = await response.json()
    setWeatherData({
      temperature: weatherJson.current.temperature_2m,
      temperatureUnit: weatherJson.current_units.temperature_2m
    })
  }, []);

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
