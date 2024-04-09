import { VideoPelicula } from '../services/categorias'
import { URL_IMG } from '../services/URL'
import Mostarvideo from './Videos'

export function Estreno({ movie }) {
  const IdMovie =
    movie[0] && movie[0].id ? VideoPelicula({ idMovie: movie[0].id }) : null

  return (
    <div>
      {movie.map(m => (
        <div key={m.id}>
          <div
            className="w-full bg-opacity-100z p-4 h-auto flex gap-10 bg-gray-900 relative px-20 py-10"
            style={{
              backgroundImage: `linear-gradient(rgba(33, 37, 41, 0.8), rgba(33, 37, 41, 0.8)), url(${URL_IMG}${m.backdrop_path})`,
              overflow: 'hidden',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="w-1/2">
              <h3 className="text-gray-100 font-[700] text-3xl mb-4">
                {m.title}
              </h3>
              <p className="text-gray-200 text-lg">{m.overview}</p>
            </div>
            <div className="w-1/2 ">
              <Mostarvideo
                urlVideo={IdMovie}
                width={'100%'}
                height={'250rem'}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
