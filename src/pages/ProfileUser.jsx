import { Link, Route, Routes } from 'react-router-dom'
import AccountAdress from '../components/Account/AccountAdress'
import AccountInfo from '../components/Account/AccountInfo'
import UserOrders from '../components/Account/UserOrders'
import { useUser } from '../hooks/useUser'
import { DeleteIcon } from '../icons/Icons'

function ProfileUser() {
  const { user, logout } = useUser()

  if (!user) {
    return <div>Usuario no autenticado!</div>
  }

  return (
    <div className="my-10 flex p-6">
      <aside className="mr-16 w-72">
        <nav className="flex h-full flex-col justify-between">
          <ul className="flex flex-col gap-2 border-b-2 p-3 font-semibold">
            <li className="inline-flex items-center rounded-md">
              <Link to="/view/profile">Perfil</Link>
            </li>
            <li className="inline-flex items-center rounded-md">
              <Link to="adress">Direcciones</Link>
            </li>
            <li className="inline-flex items-center rounded-md">
              <Link to="orders">Pedidos</Link>
            </li>
            <li className="inline-flex items-center rounded-md">
              <button onClick={logout}>Cerrar Sesión</button>
            </li>
          </ul>
          <ul className="mt-auto flex flex-col gap-2 p-3 font-semibold text-red-600">
            <li className="flex items-center gap-x-2">
              <DeleteIcon />
              <button>Eliminar cuenta</button>
            </li>
          </ul>
        </nav>
      </aside>

      <section className="flex-1">
        <Routes>
          <Route path="/" element={<AccountInfo />} />
          <Route path="adress" element={<AccountAdress />} />
          <Route path="orders" element={<UserOrders />} />
        </Routes>
      </section>
    </div>
  )
}

export default ProfileUser

/* 
<div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium text-gray-700 mb-4">
              Dirección
            </h3>
            <span>{user?.direction}</span>
            <p className="text-gray-600">
              <strong>Ciudad:</strong> {user?.city}
            </p>
          </div> */
