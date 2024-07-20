import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Nav from './pages/Nav'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Refer from './pages/Refer'
import Support from './pages/Support'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/refer" element={<Refer/>} />
      <Route path="/support" element={<Support/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
