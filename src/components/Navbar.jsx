import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import appFirebase from '../credenciales'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth(appFirebase)

function LisMenu({ children, href }) {
  return (
    <li className="text-white font-[500] text-[20px] hover:text-gray-300">
      <a href={`${href}`}>{children}</a>
    </li>
  )
}

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMouseLeave = () => {
    const menu = document.getElementById('dropdown-menu')
    const button = document.getElementById('dropdown-button')

    button.addEventListener('mouseleave', handleMouseLeave)
    menu.addEventListener('mouseleave', handleMouseLeave)
  }

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
            <LisMenu href={'/'}>Inicio</LisMenu>
            <LisMenu href={'../Pages/Series.jsx'}>Series</LisMenu>
            <LisMenu href={'/'}>Peliculas</LisMenu>
            <li className="group">
              <button
                onMouseEnter={() => setIsOpen(true)}
                className="flex items-center"
                id="dropdown-button"
              >
                <FontAwesomeIcon
                  className="text-red-600 w-6 h-auto"
                  icon={faUser}
                />
              </button>
              {isOpen && (
                <ul
                  id="dropdown-menu"
                  className="absolute mt-2 bg-[rgba(0,0,0,0.84)] text-white border rounded shadow-md"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={handleMouseLeave}
                >
                  <li className="p-2">
                    <a href="#">Etiqueta 1</a>
                  </li>
                  <li className="p-2">
                    <a href="#">Etiqueta 2</a>
                  </li>
                  <li className="p-2">
                    <button onClick={() => signOut(auth)}>Cerrar sesión</button>
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
