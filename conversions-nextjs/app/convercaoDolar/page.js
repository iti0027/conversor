"use client"
import { useState } from "react";

 //Cotação fixa do dollar é de $1 = R$5,20
const cotacao = 5.20;

export default function ConversosDolla (){
    const [real, setReal] = useState('');
    const [dolar, setDolar] = useState('');

    const handleRealChange = (e) => {
        const value = e.target.value;
        setReal(value);
        setDolar((parseFloat(value) / cotacao).toFixed(2));
    };

    const handleDollarChange = (e) => {
        const value = e.target.value;
        setDolar(value);
        setReal((parseFloat(value) * cotacao).toFixed(2));
    };

    return (
       <div className="justify-center text-center">
        <h1 className="text-2xl font-bold mb-4">Conversor Dólar para Real</h1>
        <input
        className="border p-2 mr-2"
        placeholder="Reais (BRL)"
        value={real}
        onChange={handleRealChange}
        />

        <input
        className="border p-2"
        placeholder="Dólares (USD)"
        value={dolar}
        onChange={handleDollarChange}
        />
       </div>
    );
}