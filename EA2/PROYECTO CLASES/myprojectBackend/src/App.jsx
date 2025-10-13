import { Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar'
import Home from './pages/Home/Home'
import Contacto from './pages/Contacto/Contacto'
import Inventario from './pages/Inventario/Inventario'
import CrearProd from './componentes/CrearProd/CrearProd'
import './App.css'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/crear-producto" element={<CrearProd />} />
        </Routes>
      </div>
    </>
  )
}
