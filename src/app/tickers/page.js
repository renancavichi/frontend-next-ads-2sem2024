import { CardTicker } from "@/components/CardTicker"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Tickers() {
  
  return (
    <>
      <Header isLogged={true}/>
        <main className="p-5">
          <h1 className="text-3xl">Tickers</h1>
          <CardTicker 
            ticker="AAPL" 
            currentPrice={189.84} 
            sharesOutstanding={15.45}
          >
            Apple Inc.
          </CardTicker>
          <CardTicker ticker="MSFT" currentPrice={145.84} sharesOutstanding={10.63}> 
            Microsoft
          </CardTicker>
          <CardTicker 
            ticker="AMZ" 
            currentPrice={178.84} 
            sharesOutstanding={12.45}
          >
            Amazon Inc.
          </CardTicker>
        </main>
      <Footer />
    </>
  )
}
