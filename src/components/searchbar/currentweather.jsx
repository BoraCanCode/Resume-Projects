import React from 'react';
import { useState } from 'react';
import { useWeatherContext } from '../context/weatherContext';
import { useWeather } from '../hooks/useWeather'

export default function CurrentWeather() {
    const { city, units } = useWeatherContext();
    const { data, status, error } = useWeather(city, units);

  

    if (status === 'loading') return <p>Loading</p>
    if (status === 'error') return <p>Error: {error.message}</p>
    if (!data) return null

    return (
        <section style={{ marginTop: 16 }}>
            <h2>{data.city}</h2>
            <p>
                {Math.round(data.temp)}° {units === 'metric' ? 'C' : 'F'}
            </p>
            <p style={{ textTransform: 'capitalize' }}>{data.desc}</p>
   
        </section>
    )

}
