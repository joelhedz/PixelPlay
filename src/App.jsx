import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import appFirebase from '../src/credenciales'
import Home from './Pages/Home'
import Login from './Pages/Login'
import PantallaCarga from './Pages/PantallaCarga'
const auth = getAuth(appFirebase)

function App() {
  const [usuario, setUsuario] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, usuarioFirebase => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase)
      } else {
        setUsuario(null)
      }
      // Una vez que se complete la verificación de autenticación, establecemos cargando en falso
      setTimeout(() => {
        setCargando(false)
      }, 300)
    })

    // Cleanup del efecto
    return () => unsubscribe()
  }, []) // El efecto se ejecuta solo una vez al montar el componente

  // Si aún estamos cargando, mostramos un componente de carga
  if (cargando) {
    return <PantallaCarga />
  }

  return (
    <Routes>
      <Route
        path="/Login"
        element={usuario ? <Navigate to="/" /> : <Login />}
      />
      <Route path="/" element={usuario ? <Home /> : <Navigate to="/Login" />} />
    </Routes>
  )
}

export default App
