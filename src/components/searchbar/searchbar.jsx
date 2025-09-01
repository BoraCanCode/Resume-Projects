import React from "react";
import { useState } from "react";
import { useWeatherContext } from '../context/weatherContext'

export default function SearchBar() {
    const { setCity } = useWeatherContext()
    const [q, setQ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        const name = q.trim()
        if (!name) return
        setCity(name);
        setQ('')
    };

    return (
        <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8 }}>
            <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Enter city"
            />
            <button type="submit">Search</button>
        </form>
    )

}
