import { NavLink } from 'react-router-dom'

function NavMenu() {
  // Menu de navegación
  return (
    <nav className="mx-8">
      <ul className="flex items-center justify-center gap-x-4 whitespace-nowrap font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'text-primaryColor' : '')}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'text-primaryColor' : '')}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quienes-somos"
            className={({ isActive }) => (isActive ? 'text-primaryColor' : '')}
          >
            Quienes Somos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'text-primaryColor' : '')}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
