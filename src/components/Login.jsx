import React from 'react'
import Imagen from '../assets/imglogin2.jpg'
import ImagenProfile from '../assets/profile.png'
import './App.css'




const Login = () => {
  return (
    <div className='container'>
      <div className='row'>


        {/*columna mas pequeña formulario*/}

        <div className='col-md-4'>

          <div className="padre">
            <div className='card card-body'>
              <img src={ImagenProfile} alt="" className='estilo-profile' />
              <form>
                <div className='row'>
                  <input type="text" placeholder='Ingresar Email' className='cajaTexto' />
                  <input type="password" placeholder='Ingresar contraseña' className='cajaTexto' />
                  <button className='btnform' >Registrarse</button>
                </div>

              </form>

            </div>
          </div>
        </div>
        {/*COLUMNA  MAS GRANDE*/}
        <div className='col-md-8'>
          <img src={Imagen} alt="" className='tamaño-imagen' />
        </div>
      </div>
    </div>
  )
}

export default Login