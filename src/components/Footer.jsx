import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="container mx-auto border-t-2 pt-8 my-2">
      <h3 className="text-center text-3xl font-bold text-primaryColor">
        Nuestros favoritos recomendados
      </h3>
      <div className="justify-center flex border-b-2 py-8">
        <div className="lg:flex flex-col justify-center items-center flex-1 hidden">
          <img
            src="/logo-distriquesos.png"
            alt="Icono de empresa"
            className="w-72"
          />
          <p>Comunicate al servicio al cliente</p>
          <span>(601) 717 98 63</span>
        </div>

        <div className="flex justify-center gap-x-10 flex-auto">
          <ul>
            <li className="font-semibold">Conocenos</li>
            <li>
              <Link to="/quienes-somos" className="hover:text-primaryColor">
                ¿Quienes somos?
              </Link>
            </li>
            <li>
              <Link to="#">Términos y condiciones</Link>
            </li>
            <li>Preguntas frecuentes</li>
          </ul>

          <ul>
            <li className="font-semibold">Contactanos</li>
            <li>
              <Link to="/contact" className="hover:text-primaryColor">
                PQR's
              </Link>
            </li>
            <li>Formulario de contacto</li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=573242011256&text&type=phone_number&app_absent=0"
                target="_blank"
                className="hover:text-primaryColor"
              >
                Whatsapp
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Cl.+72+%2345,+Bogot%C3%A1/@4.6683728,-74.0767528,17z/data=!4m6!3m5!1s0x8e3f9affa70baed9:0x3cfa6ac562683eeb!8m2!3d4.6683728!4d-74.0741779!16s%2Fg%2F11kbthrkpx?entry=ttu"
                target="_blank"
                className="hover:text-primaryColor"
              >
                Calle 72 #45a37
              </a>
            </li>
          </ul>

          <ul>
            <li className="font-semibold">Accesos Coorporativos</li>
            <li>
              <Link to="login">Mi cuenta</Link>
            </li>
            <li>Mis pedidos</li>
          </ul>
        </div>
      </div>
      <p className="text-neutral-500 my-8">
        ©2024 DistriQuesos Charles. Todos los derechos reservados.
      </p>
    </footer>
  )
}
