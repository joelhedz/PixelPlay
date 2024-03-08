import index from './Pages/index'

//IMPORTANDO LOS MODULOS DE FIREBASE
import appFirebase from '../src/credenciales'
import {getAuth, onAuthStateChanged, onIdTokenChanged  } from "firebase/auth";
const auth = getAuth(appFirebase)

//IMPORTAR COMPONENTES
import Login from '../src/components/Login'
import Home from '../src/components/Home'
import { useState } from 'react';

function App() {

  const [usuario,setUsuario] = useState(null) 
  onAuthStateChanged(auth,(usuarioFirebase) => {

    if (usuarioFirebase) {
      setUsuario(usuarioFirebase)
    }
    else
    {
      setUsuario(null)
    }
  })
 
  return (
    <div>
      {usuario ? <Home correoUsuario ={usuario.email} /> : <Login/>}
    </div>
  )
}

export default App
