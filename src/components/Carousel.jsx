import { useState } from 'react'
import { URL_IMG } from '../services/URL'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
  faPlay,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'

export default function InfiniteCarousel({ sliders, altura }) {
  const [current, setCurrent] = useState(0)

  const previusSlide = () => {
    current === 0 ? setCurrent(sliders.length - 1) : setCurrent(current - 1)
  }

  const nextSlide = () => {
    current === sliders.length - 1 ? setCurrent(0) : setCurrent(current + 1)
  }

  const truncateToFirstPoint = text => {
    const periodIndex = text.indexOf('.')
    return periodIndex !== -1 ? text.slice(0, periodIndex + 1) : text
  }

  return (
    <div
      className="relative overflow-hidden"
      style={{ maxHeight: `${altura}` }}
    >
      <div className="flex ">
        {sliders.map((s, index) => (
          <div
            key={s.id}
            className="w-full flex-shrink-0 transition ease-out duration-500"
            style={{
              transform: `translateX(${-(current * 100)}%)`,
              transition: `${current === 0 ? ' ease-out duration-500' : ''}`
            }}
          >
            <img
              src={`${URL_IMG}${s.backdrop_path}`}
              alt={s.title}
              className="-w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            {/*! Contenido del slider */}
            <div className="absolute top-1/4 left-28 w-1/3 z-10">
              <div>
                <h3 className=" text-white mb-3 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
                  {s.title}
                </h3>
                <p className="text-wrap md:text-lg lg:text-xl text-gray-200">
                  {truncateToFirstPoint(s.overview)}
                </p>
              </div>
              {/*! Botones de reproduccion y mas informacion */}
              <div className="mt-7 flex gap-3 z-10">
                <a
                  href="/"
                  className="text-white bg-[rgba(0,0,0,0.34)] hover:bg-red-700 cursor-pointer border rounded-md p-2 px-5"
                >
                  <FontAwesomeIcon icon={faPlay} className="mr-3" />
                  Reproducir
                </a>
                <a
                  href="/"
                  className="text-white bg-[rgba(0,0,0,0.34)] hover:bg-gray-600 border rounded-md p-2 px-5"
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-3" />
                  Mas Informacion
                </a>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="absolute top-1/2 w-full -z-1 flex justify-between text-white px-10 text-3xl"> */}
        <div className="absolute top-1/2 w-auto text-white px-10 text-3xl">
          <button onClick={previusSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 w-auto text-white px-10 text-3xl">
          <button onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        {/* </div> */}
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {sliders.map((s, index) => (
          <div
            key={index}
            className={`rounded w-7 h-1 cursor-pointer ${
              index === current ? 'bg-white w-10' : 'bg-gray-500'
            }`}
            onClick={() => setCurrent(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
