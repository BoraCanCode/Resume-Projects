import React from 'react'
import './App.css'
import { WeatherProvider } from './components/context/weatherContext'
import SearchBar from './components/searchbar/searchbar'
import CurrentWeather from './components/searchbar/currentweather'
import UnitsToggle from './components/searchbar/unitToggle'

function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-15 animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Glassmorphism Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
          <div className="w-full max-w-lg">
            {/* Main Card */}
            <div className="backdrop-blur-3xl bg-white/10 rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              {/* Header with Gradient */}
              <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-8 text-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
                    Weather<span className="text-cyan-200">Pro</span>
                  </h1>
                  <p className="text-blue-100 text-sm opacity-90">Real-time weather insights</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 space-y-8">
                <SearchBar />
                <UnitsToggle />
                <CurrentWeather />
              </div>
            </div>
            
            {/* Bottom Accent */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-white/60 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span>Live Weather Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WeatherProvider>
  )
}

export default App