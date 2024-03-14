import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import CenterMode from '../components/CarouselMultiple'
import Titulo from '../components/Title'
import PiePagina from '../components/PiePagina'
import {
  PeliculasPopulares,
  SeriePopulares,
  Tendencias,
  ProximosEstrenos,
  PeliculasEnEmision
} from '../services/categorias'
import { Estreno } from '../components/PeliculaEstreno'
import { useMovies } from '../hooks/useMovies'

export default function Index() {
  const Emision = useMovies({
    Peliculas: 10,
    categoria: PeliculasEnEmision
  })

  const Movies = useMovies({
    Peliculas: 5,
    categoria: Tendencias
  })

  const Populares = useMovies({
    Peliculas: 7,
    categoria: PeliculasPopulares
  })

  const MoviesEstrenos = useMovies({
    Peliculas: 1,
    categoria: ProximosEstrenos
  })

  const Series = useMovies({
    Peliculas: 7,
    categoria: SeriePopulares
  })

  return (
    <>
      <header className="relative">
        <div className="flex absolute z-50 w-full ">
          <Navbar />
        </div>

        <div className="">
          <Carousel sliders={Movies} altura={'90vh'} />
        </div>
      </header>
      <main className="w-11/12 m-auto mt-8">
        <div>
          <section>
            <Titulo name={'Peliculas Populares'} />
            <br />
            <CenterMode movies={Populares} />
          </section>

          <section className="mt-14">
            <Titulo name={'Series'} />
            <br />
            <CenterMode movies={Series} />
          </section>

          <section className="mt-14">
            <Estreno movie={MoviesEstrenos} />
          </section>

          <section className="my-14">
            <Titulo name={'Nuevos Lanzamientos'} />
            <br />
            <CenterMode movies={Emision} />
          </section>
        </div>
      </main>
      <footer className="bg-[#212529]">
        <PiePagina />
      </footer>
    </>
  )
}
