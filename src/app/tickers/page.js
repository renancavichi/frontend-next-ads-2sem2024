import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Tickers() {
  
  return (
    <>
      <Header isLogged={true} user={user}/>
        <main className="p-5">
          <h1 className="text-3xl">Tickers</h1>
          <CardTicker />
          <CardTicker />
          <CardTicker />
        </main>
      <Footer />
    </>
  )
}
