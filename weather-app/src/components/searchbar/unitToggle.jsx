import React from 'react';
import { useWeatherContext } from '../context/weatherContext'

export default function UnitsToggle() {
    const { units, setUnits } = useWeatherContext();

    return (
        <div className="flex justify-center">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-1.5 border border-white/20 shadow-xl">
                {/* Sliding background */}
                <div 
                    className={`absolute top-1.5 w-20 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl transition-transform duration-300 ease-out shadow-lg ${
                        units === 'imperial' ? 'translate-x-20' : 'translate-x-0'
                    }`}
                ></div>
                
                <div className="relative flex">
                    <label className="flex items-center justify-center cursor-pointer z-10">
                        <input
                            type="radio"
                            name="units"
                            value="metric"
                            checked={units === 'metric'}
                            onChange={() => setUnits('metric')}
                            className="sr-only"
                        />
                        <span className={`w-20 h-12 flex items-center justify-center text-lg font-bold transition-colors duration-300 rounded-xl ${
                            units === 'metric' 
                                ? 'text-white' 
                                : 'text-white/70 hover:text-white/90'
                        }`}>
                            °C
                        </span>
                    </label>
                    
                    <label className="flex items-center justify-center cursor-pointer z-10">
                        <input
                            type="radio"
                            name="units"
                            value="imperial"
                            checked={units === 'imperial'}
                            onChange={() => setUnits('imperial')}
                            className="sr-only"
                        />
                        <span className={`w-20 h-12 flex items-center justify-center text-lg font-bold transition-colors duration-300 rounded-xl ${
                            units === 'imperial' 
                                ? 'text-white' 
                                : 'text-white/70 hover:text-white/90'
                        }`}>
                            °F
                        </span>
                    </label>
                </div>
            </div>
        </div>
    );
}