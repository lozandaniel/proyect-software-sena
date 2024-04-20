import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className="h-96 flex flex-col items-center justify-center">
      <Link to="/" className="hover:text-primaryColor font-semibold">
        Inicio
      </Link>
      <h1 className="text-5xl font-bold">Oppppps... 404</h1>
      <p className="text-xl">
        Parece que la pagina que estas en este momento buscando, no se encuentra
        disponible.
      </p>
    </div>
  )
}
