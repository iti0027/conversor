"use client"
import { useState } from "react";

export default function ConvercaoTemperatura (){
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsius = (e) =>{
        const value = e.target.value;
        setCelsius(value);
        setFahrenheit(((parseFloat(value) *9)/5 + 32).toFixed(2));
    };

    const handleFahrenheit = (e) =>{
        const value = e.target.value;
        setFahrenheit(value);
        setCelsius((((parseFloat(value) - 32)* 5)/9).toFixed(2));
    };

    return(
        <div className="justify-center text-center">
            <h1 className="text-2xl font-bold mb-4">Conversor de Temperatura</h1>
            <input
            className="border p-2"
            placeholder="Celsius (°C)"
            value={celsius}
            onChange={handleCelsius}
            />

            <input
            className="border p-2"
            placeholder="Fahrenheit (°F)"
            value={fahrenheit}
            onChange={handleFahrenheit}
            />
        </div>
    );
}