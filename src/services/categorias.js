export const SeriePopulares = 'https://api.themoviedb.org/3/tv/popular?language=es-ES&page=1'
export const SerieMejorValoradas = 'https://api.themoviedb.org/3/tv/top_rated?language=es-Es&page=1'
export const SerieEnEmision = 'https://api.themoviedb.org/3/tv/on_the_air?language=es-ES&page=1'
export const Tendencias = 'https://api.themoviedb.org/3/trending/all/day?language=es-ES'
export const PeliculasEnEmision = 'https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1'
export const PeliculasMejorValoradas = 'https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1'
export const PeliculasPopulares = 'https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1'
export const ProximosEstrenos = 'https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=1'

export const VideoPelicula = ({ idMovie }) => {
    const url = `https://api.themoviedb.org/3/movie/${idMovie}/videos?language=es-ES`
    return url
}
