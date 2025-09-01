export const Key = '565bb89c49b4d8a8f6a5fb40498cc39a'
export const Base = "https://api.openweathermap.org/data/2.5/"

export async function FetchCurrent(city, units = 'metric') {
    const URL = `${Base}weather?q=${encodeURIComponent(city)}&units=${units}&appid=${Key}`
    const res = await fetch(URL);
    if (!res.ok) throw new Error(`HTTP${res.status}`);
    return res.json();

}