import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Banner from "../src/components/Banner/Banner.jsx"
import FeaturedCategories from './components/featuredCategories/FeaturedCategories.jsx'
import Popular from './components/Popular/Popular.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Banner />
     <FeaturedCategories />
     <Popular />
    </>
  )
}

export default App
