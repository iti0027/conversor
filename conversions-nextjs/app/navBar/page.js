import Link from 'next/link';

export default function NavBar(){
    return (
        <nav className= "bg-blue-600 p-4 text-white flex gap-4 justify-center text-center ">
        <Link href="/home">Home</Link>
        <Link href="/aboutme">Sobre</Link>
        <Link href="/convercaoDolar">Converção Dólar</Link>
        <Link href="/convercaoTemperatura">Converção Temperatura</Link>
        <Link href="/convercaoMetros">Converção Metros</Link>
        </nav>

    );
}
