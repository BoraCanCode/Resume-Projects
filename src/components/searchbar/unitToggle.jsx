// src/components/UnitsToggle.jsx
import React from 'react';
import { useWeatherContext } from '../context/weatherContext'

export default function UnitsToggle() {
    const { units, setUnits } = useWeatherContext();

    return (
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <label>
                <input
                    type="radio"
                    name="units"
                    value="metric"
                    checked={units === 'metric'}
                    onChange={() => setUnits('metric')}
                />
                °C
            </label>
            <label>
                <input
                    type="radio"
                    name="units"
                    value="imperial"
                    checked={units === 'imperial'}
                    onChange={() => setUnits('imperial')}
                />
                °F
            </label>
        </div>
    );
}
