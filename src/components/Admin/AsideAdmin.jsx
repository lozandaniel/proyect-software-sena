import { Link, NavLink } from 'react-router-dom'
import {
  InventoryIcon,
  LogoutUser,
  OrdersIcon,
  UserIcon,
  UsersIcons,
  ViewDashboardIcon,
} from '../../icons/Icons'
import CustomNavLink from '../CustomNavLink'
import { useUser } from '../../hooks/useUser'

function AsideAdmin() {
  const { isEmployee, isAdmin, logout, user } = useUser()

  return (
    <aside className="fixed flex h-screen w-3/12 flex-none flex-col items-center border-r-2 py-4">
      <header>
        <Link to="dashboard">
          <img
            src="/logo-distriquesos.png"
            alt="Logo distriquesos Charles"
            className="w-64"
          />
        </Link>
      </header>
      <nav className="flex h-screen w-full flex-col justify-between">
        <ul className="m-8 flex flex-col gap-2 border-b-2 font-semibold *:rounded-md *:p-3 [&>a>li]:inline-flex [&>a>li]:items-center">
          {isAdmin && (
            <>
              <CustomNavLink to="admin/dashboard">
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
                      <Link to="admin/inventory">Gestionar Inventario</Link>
                    </li>
                    <li>
                      <Link to="admin/inventory/products">
                        Gestionar Productos
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <CustomNavLink to="admin/providers">
                <UsersIcons />
                Proveedores
              </CustomNavLink>

              <CustomNavLink to="admin/clients">
                <UserIcon className="mr-2" />
                Clientes
              </CustomNavLink>

              <CustomNavLink to="admin/orders">
                <OrdersIcon className="mr-2" />
                Pedidos
              </CustomNavLink>

              <NavLink>
                <li>Facturación electronica</li>
              </NavLink>
            </>
          )}

          <li>
            <details className="cursor-default">
              <summary className="inline-flex gap-2">Recursos humanos</summary>
              <ul className="px-10 py-1">
                <li>
                  <Link to="employee">Horarios</Link>
                </li>
                {user?.area?.areaId === 4 && (
                  <li>
                    <Link to="employee/shifts">
                      Registrar horarios empleados
                    </Link>
                  </li>
                )}
              </ul>
            </details>
          </li>
        </ul>
        <ul className="m-4 rounded-md p-4 text-end font-semibold text-red-600">
          <li className="flex gap-x-2">
            <LogoutUser />
            <button onClick={logout}>Cerrar sesión</button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default AsideAdmin
