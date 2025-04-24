import Link from 'next/link';

export default function NavBar(){
    return (
        <nav className= "bg-blue-600 p-4 text-white flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/About Me">AboutMe</Link>
        <Link href="/Dollar Convertion">ConversosDolla</Link>
        <Link href="/Temperatura converstion">ConvercaoTemperatura</Link>
        <Link href="/Distancia">ConvercaoMetros</Link>
        </nav>
    );
}