import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ScreenThree from './Components/ScreenThree'
import ScreenTwo from './Components/ScreenTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <ScreenTwo />
      <ScreenThree />
    </div>
  )
}

export default App
