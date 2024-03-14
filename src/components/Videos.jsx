import { URL_YOUTUBE } from '../services/URL'
import UrlVideo from '../services/ObtenerIdVideo'

export default function Mostarvideo({ urlVideo, width, height }) {
  const Video = UrlVideo({
    url: 'https://api.themoviedb.org/3/movie/1011985/videos?language=es-ES'
  })
  console.log(Video)
  return (
    <>
      {Video && (
        <div key={Video.id}>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            width={`${width}`}
            height={`${height}`}
            src={`${URL_YOUTUBE}${Video.key}`}
            title={`${Video.name}`}
          />
        </div>
      )}
    </>
  )
}
