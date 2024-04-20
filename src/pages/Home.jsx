import LatestProducts from '../components/Home/LatestProducts'

function Home() {
  return (
    <>
      <div className="absolute top-0 -z-10 h-full bg-white">
        <div className="absolute bottom-auto left-0 top-20 h-[500px] w-[500px] -translate-x-[70%] translate-y-[0%] rounded-full bg-[#0070F070] opacity-70 blur-[80px]"></div>
      </div>
      <header className="relative">
        <h1 className="text-3xl font-bold">Inicio</h1>
        <p>
          Bienvenid@ a Distriquesos Charles! Somos una empresa Bogotana dedicada
          a la distribución de materias primas de la más alta calidad para el
          mercado de panadería en Colombia.
        </p>
      </header>
      <LatestProducts />
    </>
  )
}

export default Home
