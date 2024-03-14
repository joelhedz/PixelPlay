function RedesSvg({ ruta, id, styles }) {
  return (
    <svg className={`fill-white w-7 h-7 ${styles}`}>
      <use href={`${ruta}${id}`} />
    </svg>
  )
}

function PiePagina() {
  return (
    <>
      <div className="w-11/12 m-auto px-8 pt-8 flex justify-between">
        <article className="w-[32%]">
          <img src="/public/img/LogoFooter.webp" className="w-2/5" alt="" />
          <p className="text-gray-400 mt-2 text-wrap">
            En Pixel Play, compartimos tu pasión por el séptimo arte y las
            series, comprometiéndonos a brindarte la más destacada colección de
            títulos en línea para que disfrutes del mejor entretenimiento a tu
            alcance.
          </p>
          <div className="flex gap-14 py-5">
            <a href="https://www.facebook.com/" target="_blank">
              <RedesSvg
                ruta={'/public/logos/Facebook.svg'}
                styles={
                  'hover:bg-[#0283ce] hover:rounded-full hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110 hover:cursor-pointer'
                }
                id={'#faceIcon'}
              />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <RedesSvg
                styles={
                  'hover:bg-[#cb02ce] hover:rounded hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110 hover:cursor-pointer'
                }
                ruta={'/public/logos/Instagram.svg'}
                id={'#instaIcon'}
              />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <RedesSvg
                styles={
                  'hover:bg-black hover:rounded hover:transition-all hover:duration-300 hover:ease-in-out hover:transform hover:scale-110 hover:cursor-pointer'
                }
                ruta={'/public/logos/XTwitter.svg'}
                id={'#twitterIcon'}
              />
            </a>
          </div>
        </article>
        <article className="w-[32%] text-center text-gray-400">
          <a href="#">Centro de ayuda</a>
          <br />
          <a href="#">Términos de uso</a>
          <br />
          <a href="#">Privacidad</a>
        </article>
        <article className="w-[32%] text-center text-gray-400">
          <a href="#">Contactanos</a> <br />
          <a href="#">Prensa</a>
          <br />
          <a href="#">Empleos</a>
          <br />
        </article>
      </div>
      <p className="text-gray-400 text-center pb-10">
        Derechos Reservados © 2023-2024 PixelPlay
      </p>
    </>
  )
}

export default PiePagina
