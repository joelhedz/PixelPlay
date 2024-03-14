import React, { useState } from 'react'
import ImagenProfile from '../assets/profile.png'
import VideoFondo from '../assets/video.mp4'
import './App.css'
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

  console.log(VideoFondo)
  return (
    <div>
      <div className="VIDEOFONDO">
        <video autoPlay muted loop>
          <source src={VideoFondo} type="video/mp4" />
        </video>
      </div>

      <div
        className="row vh-100 justify-content-center align-items-center"
        style={{ zIndex: '100' }}
      >
        <div className=" col-s-4 col-md-5 col-lg-5 col-xl-6">
          <div className="padre">
            <img src={ImagenProfile} alt="" className="estilo-profile" />
            <form onSubmit={funcAutetication}>
              <div className="row align-items-center">
                <div className="Entradas">
                  <input
                    type="email"
                    placeholder="Ingresar Email"
                    className="cajaTexto"
                    id="email"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Ingresar contraseña"
                    className="cajaTexto"
                    id="password"
                    required
                  />

                  <button className="btnform">
                    {registrando ? 'Registrate' : 'Inicia sesion'}
                  </button>
                </div>
              </div>
            </form>

            <h4 className="texto">
              {registrando ? 'si ya tiene cuenta' : '¿No tienes cuenta?'}
              &nbsp;&nbsp;&nbsp;
              <button
                className="btnswitch"
                onClick={() => setRegistrando(!registrando)}
              >
                {registrando ? 'Inicia sesion' : 'registrate'}
              </button>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
