'use client'

import { useState } from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Cadastro() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:4000/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name: nome, email, pass})
    })

      if(response?.ok){
        const data = await response.json()
        console.log(data) 
      } else {
        const data = await response.json()
        console.log(data) 
        alert(data.error)
      }
  }


  return (
    <>
        <Header />
        <main className="p-5">
          <h1 className="text-3xl">Cadastre-se</h1>

          <div className="flex flex-col gap-1 p-5 w-[300px]">
            <label>Nome:</label>
            <input className="border" type="text" value={nome} onChange={event => setNome(event.target.value)}/>

            <label>Email:</label>
            <input className="border" type="text" value={email} onChange={event => setEmail(event.target.value)}/>

            <label>Senha:</label>
            <input className="border" type="text" value={pass} onChange={event => setPass(event.target.value)}/>

            <button onClick={handleSubmit} className="border bg-slate-300 rounded-sm" >Cadastrar</button>
          </div>
          
        </main>
        <Footer />
    </>
  )
}
