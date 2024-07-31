import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Banner from "../src/components/Banner/Banner.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Banner />
    </>
  )
}

export default App
