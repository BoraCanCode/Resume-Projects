import React from 'react'
import './App.css'
import { WeatherProvider } from './components/context/weatherContext'
import SearchBar from './components/searchbar/searchbar'
import CurrentWeather from './components/searchbar/currentweather'
import UnitsToggle from './components/searchbar/unitToggle'

function App() {
  return (
    <WeatherProvider>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Weather App</h1>
        <SearchBar />
        <UnitsToggle />
        <CurrentWeather />
      </div>
    </WeatherProvider>
  )
}

export default App
