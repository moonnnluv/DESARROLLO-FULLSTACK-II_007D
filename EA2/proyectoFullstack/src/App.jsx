import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header.jsx'
import { HelloWorld } from './componentes/HelloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <HelloWorld />
    </>
  )
}

export default App
