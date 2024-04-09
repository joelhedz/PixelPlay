import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'

const auth = getAuth(appFirebase)

const LisMenu = [
  {
    name: 'Inicio',
    href: '/'
  },
  {
    name: 'Series',
    href: '/Series'
  },
  {
    name: 'Peliculas',
    href: '/Peliculas'
  }
]

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hovered, setHovered] = useState(false) // Cambiado a minúscula para seguir la convención de nomenclatura en JavaScript

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  const handleSignOut = () => {
    signOut(auth)
    // Realizar otras acciones después de cerrar sesión si es necesario
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`w-full transition bg-gradient-to-b from-gray-900 to-transparent duration-500 ease-in-out delay-150 ${
        scrolling ? 'sticky' : ''
      }`}
    >
      <div className="flex items-center">
        <div className="w-3/12">
          <a href="/" className="block w-24 m-5 mx-[15%]">
            <img
              src="/public/img/LogoNav.webp"
              className=" hover:scale-125 h-auto  "
              alt="Logo PixelPlay"
            />
          </a>
        </div>
        <div className="w-9/12">
          <ul className="flex gap-10 mx-[10%] justify-end">
            {LisMenu.map((item, index) => (
              <li
                key={index}
                className="text-white font-[500] text-[20px] hover:text-gray-300"
              >
                <Link to={item.href}>{item.name}</Link>
              </li>
            ))}
            <li
              className="group"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <button
                className="flex relative items-center"
                id="dropdown-button"
                onMouseEnter={handleMouseEnter} // Agregado
                onMouseLeave={handleMouseLeave} // Agregado
              >
                <FontAwesomeIcon
                  className="text-red-600 w-6 h-auto"
                  icon={faUser}
                />
              </button>
              {(isOpen || hovered) && ( // Cambiado a 'hovered' en lugar de 'Hovered'
                <ul
                  id="dropdown-menu"
                  className="absolute mt-2 bg-[rgba(0,0,0,0.84)] text-white border rounded shadow-md"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <li className="p-2">
                    <a href="#">Etiqueta 1</a>
                  </li>
                  <li className="p-2">
                    <a href="#">Etiqueta 2</a>
                  </li>
                  <li className="p-2">
                    <button onClick={handleSignOut}>Cerrar sesión</button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
