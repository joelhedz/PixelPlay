import { useEffect, useState } from 'react'

function UrlVideo({ url }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await (await fetch(url)).json()
      setMovies(data.results)
    }

    fetchMovies()
  }, [url])

  const hasMovies = movies && movies.length > 0

  if (!hasMovies) {
    return <div>Cargando...</div>
  }
  const video = movies[0]

  if (!video) return <div>No se encontró video</div>
  console.log(video)
  return video
}

export default UrlVideo
