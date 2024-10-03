import Image from 'next/image'
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Home() {
  
  return (
    <>
      <Header />
        <main className="p-5">
          <h1 className="text-3xl">Sobre o React</h1>
          <Image 
            src={'/img/React.webp'}
            width={300}
            height={300}
            alt="Logo React"
          />
          <p>
            React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[4][5] for building user interfaces based on components by Facebook Inc. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.[6][7][8]
          </p>
          <p>
            React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality.[9][10] A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements. It was first launched on 29 May 2013.
          </p>
        </main>
      <Footer />
    </>
  )
}
