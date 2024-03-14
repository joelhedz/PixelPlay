import { useEffect, useState } from 'react'
import { options } from '../services/Api/API'
// Le pasamos el parametro de Peliculas para obtener una cantidad de peliculas
export function useMovies({ Peliculas, categoria }) {
    const [movies, setMovies] = useState([])

    const fetchMovies = async () => {
        try {
            const response = await fetch(categoria, options)
            const data = await response.json()
            const Movies = data.results.slice(0, Peliculas)
            setMovies(Movies)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [categoria])

    return movies
}
