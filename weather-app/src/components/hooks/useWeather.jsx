import { useState, useEffect } from "react";

import { FetchCurrent } from "../service/weatherService";

export function useWeather(city, units) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState('Idle');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!city) return
        let alive = true
        setStatus('loading')
        FetchCurrent(city, units).then(json => {
            if (!alive) return
            setData({
                city: json.name,
                temp: json.main?.temp,
                desc: json.weather?.[0]?.description,
                icon: json.weather?.[0]?.icon,
                humidity: json.main?.humidity,
                wind: json.wind?.speed,
            })
            setStatus('success')
        })
            .catch(e => {
                if (!alive) return
                setError(e)
                setStatus('error')
            })
        return () => { alive = false };
    }, [city, units])
    return { data, status, error };
}