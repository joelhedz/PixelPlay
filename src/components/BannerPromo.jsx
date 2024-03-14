function Banner({ titulo, text }) {
  return (
    <div>
      <div>
        <h3>{titulo}</h3>
        <p>{text}</p>
      </div>
      <div>
        <img src="https://via.placeholder.com/150" alt="Banner" />
      </div>
    </div>
  )
}

export default Banner
