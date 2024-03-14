import Slider from 'react-slick'

function CenterMode({ movies }) {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 6,
    speed: 500
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id}>
            <img
              className="h-64 w-[90%] object-cover shadow-lg"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CenterMode
