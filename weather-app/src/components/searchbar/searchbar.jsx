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
        <div className="relative">
            <form onSubmit={onSubmit} className="relative">
                <div className="relative group">
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search any city worldwide..."
                        className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400/50 transition-all duration-300 text-lg group-hover:bg-white/15"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-400/30 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25 hover:scale-105 active:scale-95"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </form>
            
            {/* Floating particles effect */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
        </div>
    )
}