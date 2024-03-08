import React, { useState } from 'react'
import Imagen from '../assets/celular.png'
import ImagenProfile from '../assets/profile.png'
import './App.css'
import appFirebase from '../credenciales'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)




const Login = () => {


  const [registrando, setRegistrando] = useState(false)
  
  const funcAutetication = async(e) =>{
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña =e.target.password.value;
    
    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth,correo,contraseña)
      } catch (error) {
        alert("Asegurese que la contraseña tenga mas de 8 caracteres")
      }
    }
    else {
      try {
        await signInWithEmailAndPassword(auth,correo,contraseña)
      } catch (error) {
        alert("El correo o la contraseña son incorrectos")
      }
      await signInWithEmailAndPassword(auth,correo,contraseña)
    }

  }


  return (

    <div class="diagonal-gradient">
      <div className='container'>

        <div className='row'>

          {/*columna mas pequeña formulario*/}

          <div className='col-md-4'>

            <div className="padre">
              <div className='card card-body shadow'>
                <img src={ImagenProfile} alt="" className='estilo-profile' />
                <form onSubmit={funcAutetication} >
                  <div className='row'>
                    <input type="text" placeholder='Ingresar Email' className='cajaTexto' id='email' />
                    <input type="password" placeholder='Ingresar contraseña' className='cajaTexto' id='password'/>
                    <button className='btnform' >{registrando ? "Registrate" : "Inicia sesion"}</button>
                  </div>

                </form>

                <h4 className='texto' >{registrando ? "si ya tiene cuenta" : "No tienes cuenta"}
                  <button className='btnswitch' onClick={() => setRegistrando(!registrando)}>{registrando ? "Inicia sesion" : "registrate"}</button>
                </h4>

              </div>
            </div>
          </div>
          {/*COLUMNA  MAS GRANDE*/}
          <div className='col-md-8'>
            <img src={Imagen} alt="" className='tamaño-imagen' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login