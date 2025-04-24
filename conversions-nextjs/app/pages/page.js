import "../styles/global.css"
import NavBar from "@/components/NavBar"

export default function App({Component, pageProps}){
    return(
        <>
        <NavBar/>
        <main className="p-4">
            <Component {...pageProps}/>
        </main>
        </>
    );
}