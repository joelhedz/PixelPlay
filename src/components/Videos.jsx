import { URL_YOUTUBE } from '../services/URL'
import { useVideo } from '../hooks/useVideo'

export default function Mostarvideo({ urlVideo, width, height }) {
  const Video = useVideo({
    url: urlVideo
  })
  if (!Video || Video.length === 0) {
    return null
  }

  return (
    <>
      <div key={Video[0].id}>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          width={`${width}`}
          height={`${height}`}
          src={`${URL_YOUTUBE}${Video[0].key}`}
          title={`${Video[0].name}`}
        />
      </div>
    </>
  )
}
