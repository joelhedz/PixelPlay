import { SerieMejorValoradas } from '../services/categorias'
import { CarouselMultiple } from '../components/CarouselMultiple'
import { useMovies } from '../hooks/useMovies'

export default function Series() {
  const MejoresValoradas = useMovies({
    Peliculas: 15,
    categoria: SerieMejorValoradas
  })
  return (
    <div>
      <CarouselMultiple url={MejoresValoradas} />
    </div>
  )
}
