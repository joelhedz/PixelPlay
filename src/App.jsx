import Home from './Pages/Home'

// IMPORTANDO LOS MODULOS DE FIREBASE
import appFirebase from '../src/credenciales'
import { getAuth, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth'

// IMPORTAR COMPONENTES
import Login from '../src/components/Login'
import { useState } from 'react'
const auth = getAuth(appFirebase)

function App() {
  return Home()

  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, usuarioFirebase => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    } else {
      setUsuario(null)
    }
  })

  return (
    <div>
      <Home />
      {/* {usuario ? <Home correoUsuario ={usuario.email} /> : <Login/>} */}
    </div>
  )
}

export default App
