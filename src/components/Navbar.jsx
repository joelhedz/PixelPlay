import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <>
      <div className="w-3/12">
        <img src="/public/img/LogoNav.webp" alt="Logo PixelPlay" />
      </div>
      <div className="w-9/12">
        <ul>
          <li>Inicio</li>
          <li>Series</li>
          <li>Pelicula</li>
          <li>
            <a href="#">
              <FontAwesomeIcon className="text-red-600" icon={faUser} />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
