import { useEffect, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [lat, setLat] = useState(52.52)
  const [lng, setLng] = useState(13.41)
  const [weatherData, setWeatherData] = useState()

  async function loadWeather() {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    const weatherJson = await response.json()
    setWeatherData({
      temperature: weatherJson.current.temperature_2m,
      temperatureUnit: weatherJson.current_units.temperature_2m
    })
  }

  useEffect(async function() {
    await loadWeather();
  }, []);

  console.log(`Lat ${lat} Lng ${lng}`)

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
      <div class="card">
        <h2>Location</h2>
        <form>
          Lat: <input type="text" value={lat} />
          <br />
          Lng: <input type="text" value={lng} />
        </form>
      </div>
      { weatherData && (
        <div class="card">
          <p>Current temperature is { weatherData.temperature }{ weatherData.temperatureUnit }</p>
        </div>
      ) }
    </>
  )
}
