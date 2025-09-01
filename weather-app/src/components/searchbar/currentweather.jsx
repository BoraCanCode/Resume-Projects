import React from 'react';
import { useState } from 'react';
import { useWeatherContext } from '../context/weatherContext';
import { useWeather } from '../hooks/useWeather'

export default function CurrentWeather() {
    const { city, units } = useWeatherContext();
    const { data, status, error } = useWeather(city, units);

    if (status === 'loading') {
        return (
            <div className="flex flex-col items-center justify-center py-16 space-y-6">
                {/* Advanced loading animation */}
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-white/20 rounded-full animate-spin border-t-cyan-400 border-r-blue-500 border-b-purple-500"></div>
                    <div className="absolute inset-0 w-16 h-16 border-4 border-white/10 rounded-full animate-ping"></div>
                </div>
                <div className="text-white/80 font-medium animate-pulse">Fetching weather data...</div>
                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            </div>
        )
    }
    
    if (status === 'error') {
        return (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-sm border border-red-400/30 p-6">
                <div className="absolute inset-0 bg-red-500/10 animate-pulse"></div>
                <div className="relative z-10 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                    </div>
                    <div className="text-red-300 font-bold text-lg">Weather Unavailable</div>
                    <div className="text-red-200 text-sm mt-2 opacity-90">{error?.message || 'City not found'}</div>
                </div>
            </div>
        )
    }
    
    if (!data) return null

    // Dynamic weather background based on conditions
    const getWeatherGradient = (desc) => {
        if (desc?.includes('rain') || desc?.includes('drizzle')) return 'from-gray-600 via-blue-700 to-indigo-800'
        if (desc?.includes('snow')) return 'from-blue-100 via-blue-300 to-blue-500'
        if (desc?.includes('cloud')) return 'from-gray-500 via-gray-600 to-gray-700'
        if (desc?.includes('clear') || desc?.includes('sun')) return 'from-yellow-400 via-orange-500 to-red-500'
        return 'from-cyan-400 via-blue-500 to-purple-600'
    }

    return (
        <div className="space-y-6">
            {/* Main Weather Display */}
            <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${getWeatherGradient(data.desc)} p-8 shadow-2xl`}>
                {/* Animated background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 animate-bounce"></div>
                
                <div className="relative z-10">
                    {/* City Name with animation */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">
                            {data.city}
                        </h2>
                        <div className="w-16 h-1 bg-white/40 mx-auto rounded-full"></div>
                    </div>
                    
                    {/* Temperature and Icon */}
                    <div className="flex items-center justify-center mb-6">
                        {data.icon && (
                            <div className="relative mr-4">
                                <img 
                                    src={`https://openweathermap.org/img/wn/${data.icon}@4x.png`}
                                    alt={data.desc}
                                    className="w-24 h-24 drop-shadow-2xl animate-bounce"
                                    style={{animationDuration: '2s'}}
                                />
                                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
                            </div>
                        )}
                        <div className="text-right">
                            <div className="text-6xl font-bold text-white mb-2 leading-none">
                                {Math.round(data.temp)}°
                            </div>
                            <div className="text-white/80 text-xl font-medium">
                                {units === 'metric' ? 'Celsius' : 'Fahrenheit'}
                            </div>
                        </div>
                    </div>
                    
                    {/* Weather Description */}
                    <div className="text-center mb-6">
                        <p className="text-2xl font-semibold text-white capitalize tracking-wide">
                            {data.desc}
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Weather Details Cards */}
            <div className="grid grid-cols-2 gap-4">
                {/* Humidity Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-blue-400/20 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm text-white/60 uppercase tracking-widest font-medium">Humidity</div>
                        <div className="text-2xl font-bold text-white mt-1">{data.humidity}%</div>
                        <div className="mt-3 bg-white/10 rounded-full h-2 overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-1000 ease-out"
                                style={{width: `${data.humidity}%`}}
                            ></div>
                        </div>
                    </div>
                </div>
                
                {/* Wind Speed Card */}
                <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                            <div className="w-10 h-10 bg-green-400/20 rounded-xl flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-300 animate-spin" style={{animationDuration: '3s'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="text-sm text-white/60 uppercase tracking-widest font-medium">Wind Speed</div>
                        <div className="text-2xl font-bold text-white mt-1">
                            {data.wind} <span className="text-lg text-white/70">{units === 'metric' ? 'm/s' : 'mph'}</span>
                        </div>
                        <div className="flex mt-3 space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <div 
                                    key={i}
                                    className={`w-2 h-6 rounded-full transition-all duration-1000 ${
                                        i < Math.min(Math.ceil(data.wind / 2), 5) 
                                            ? 'bg-gradient-to-t from-green-400 to-emerald-300' 
                                            : 'bg-white/10'
                                    }`}
                                    style={{animationDelay: `${i * 100}ms`}}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}