import React, { useState } from 'react'
import ImagenProfile from '../assets/profile.png'
import VideoFondo from '../assets/video.mp4'
import '../../public/css/Login.css'
import appFirebase from '../credenciales'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {
  const [registrando, setRegistrando] = useState(false)

  const funcAutetication = async e => {
    e.preventDefault()
    const correo = e.target.email.value
    const contraseña = e.target.password.value

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña)
      } catch (error) {
        alert('Asegurese que la contraseña tenga mas de 8 caracteres')
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña)
      } catch (error) {
        alert('El correo o la contraseña son incorrectos')
      }
      await signInWithEmailAndPassword(auth, correo, contraseña)
    }
  }

  return (
    <div>
      <div className="VIDEOFONDO">
        <video autoPlay muted loop>
          <source src={VideoFondo} type="video/mp4" />
        </video>
      </div>

      <div className="h-screen w-screen ">
        <div className="padre h-full  flex items-center justify-center">
          <div className=" md:w-2/3 lg:w-3/4 xl:w-5/12 p-28 m-0 bg-[rgba(0,0,0,0.8)]">
            <img src={ImagenProfile} alt="" className="estilo-profile" />
            <form onSubmit={funcAutetication}>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Ingresar Email"
                  className="mt-4 p-2 border border-gray-300 rounded-md"
                  id="email"
                  required
                />
                <input
                  type="password"
                  placeholder="Ingresar contraseña"
                  className="mt-4 p-2 border border-gray-300 rounded-md"
                  id="password"
                  required
                />

                <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  {registrando ? 'Registrate' : 'Inicia sesion'}
                </button>
              </div>
            </form>

            <h4 className="mt-4 text-white">
              {registrando ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
              &nbsp;&nbsp;&nbsp;
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => setRegistrando(!registrando)}
              >
                {registrando ? 'Inicia sesion' : 'Registrarse'}
              </button>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
