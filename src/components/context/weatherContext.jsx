import React from "react";
import { createContext, useContext, useMemo, useState } from "react";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const [city, setCity] = useState('London');
    const [units, setUnits] = useState('metric')

    const value = useMemo(() => ({ city, setCity, units, setUnits }), [city, units])
    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
}

export function useWeatherContext() {
    const ctx = useContext(WeatherContext);
    if (!ctx) throw new Error('useWeatherContext must be used within WeatherProvider');
    return ctx;
}