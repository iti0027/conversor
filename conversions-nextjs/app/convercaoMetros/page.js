import { useState } from "react";

export default function Metros(){
    const [metros, setMetros] = useState('');
    const [pesPolegadas, setPesPolegadas] = useState('');

    const handleMetros = ()=>{
        const value = parseFloat(e.target.value);
        setMetros(e.target.value);
        const pes = value * 3.28084;
        const polegadas = value * 39.3701;
        setPesPolegadas(`${pes.toFixed(2)} pés / ${polegadas.toFixed(2)} polegadas.`);
    };

    const handlePesPolegadas = () =>{
        const value = parseFloat(e.target.value);
        setPesPolegadas(e.target.value);
        const metros = value / 3.28084;
        setMetros(metros.toFixed(2));
    };

    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">Conversor de Distância</h1>
            <input
            className="border p-2 mr-2"
            placeholder="Metros"
            value={metros}
            onChange={handleMetros}
            />

            <input
            className="border p-2"
            placeholder="Pés / Polegadas"
            value={pesPolegadas}
            onChange={handlePesPolegadas}
            />
        </div>
    );
}