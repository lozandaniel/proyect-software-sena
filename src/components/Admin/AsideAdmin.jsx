import { Link, useNavigate } from 'react-router-dom'
import {
  InventoryIcon,
  LogoutUser,
  OrdersIcon,
  UserIcon,
  UsersIcons,
  ViewDashboardIcon,
} from '../../icons/Icons'
import { useUser } from '../hooks/useUser'
import { NavLink } from 'react-router-dom'
import CustomNavLink from '../CustomNavLink'

function AsideAdmin() {
  const { logout } = useUser()
  const navigate = useNavigate()

  const logoutUser = () => {
    logout()
    navigate('/')
  }

  return (
    <aside className="flex-none w-3/12 flex flex-col items-center py-4 fixed h-screen border-r-2">
      <header>
        <Link to="dashboard">
          <img
            src="/logo-distriquesos.png"
            alt="Logo distriquesos Charles"
            className="w-64"
          />
        </Link>
      </header>
      <nav className="w-full h-screen flex flex-col justify-between">
        <ul className="*:p-3 *:rounded-md flex flex-col gap-2 m-8 font-semibold border-b-2 [&>a>li]:inline-flex [&>a>li]:items-center">
          <CustomNavLink to="dashboard">
            <ViewDashboardIcon />
            Vista
          </CustomNavLink>
          <li>
            <details className="cursor-default">
              <summary className="inline-flex gap-2">
                <InventoryIcon />
                Inventario
              </summary>
              <ul className="px-10 py-1">
                <li>
                  <Link to="inventory">Gestionar Inventario</Link>
                </li>
                <li>
                  <Link to="inventory/products">Gestionar Productos</Link>
                </li>
              </ul>
            </details>
          </li>
          <CustomNavLink to="providers">
            <UsersIcons />
            Proveedores
          </CustomNavLink>

          <CustomNavLink to="clients">
            <UserIcon className="mr-2" />
            Clientes
          </CustomNavLink>

          <NavLink>
            <OrdersIcon />
            <li>Pedidos</li>
          </NavLink>

          <NavLink>
            <li>Facturación electronica</li>
          </NavLink>
          <NavLink>
            <li>Recursos humanos</li>
          </NavLink>
        </ul>
        <ul className="text-red-600 p-4 rounded-md m-4 text-end font-semibold">
          <li className="flex gap-x-2">
            <LogoutUser />
            <button onClick={logoutUser}>Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default AsideAdmin
