import { useEffect, useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(function() {
    console.log("useEffect fired")
    setTimeout(() => { 
      setWeatherData({
        temperature: 8,
        temperatureUnit: "C"
      })
     }, 3000)
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
          <p>Current temperature is { weatherData.temperature }°{ weatherData.temperatureUnit }</p>
        </div>
      ) }
    </>
  )
}
