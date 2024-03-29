// IMPORTANDO LOS MODULOS DE FIREBASE
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'

// IMPORTAR COMPONENTES
import Home from './Pages/Home'
import Login from '../src/Pages/Login'
import { useState } from 'react'
const auth = getAuth(appFirebase)

function App() {
  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, usuarioFirebase => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return usuario ? <Home /> : <Login />
}

export default App
