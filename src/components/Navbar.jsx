import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

function LisMenu({ children }) {
  return (
    <li className="text-white font-[500] text-[20px] hover:text-gray-300">
      <a href="#">{children}</a>
    </li>
  )
}

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false)

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
            <LisMenu>Inicio</LisMenu>
            <LisMenu>Series</LisMenu>
            <LisMenu>Peliculas</LisMenu>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="text-red-600 w-6 h-auto"
                  icon={faUser}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
