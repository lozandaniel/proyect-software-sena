import { Routes, Route, Link } from 'react-router-dom'
import { DeleteIcon } from '../icons/Icons'
import { useUser } from '../hooks/useUser'
import AccountInfo from '../components/Account/AccountInfo'
import AccountAdress from '../components/Account/AccountAdress'
import UserOrders from '../components/Account/UserOrders'

function ProfileUser() {
  const { user, logout } = useUser()

  if (!user) {
    return <div>User not authenticated</div>
  }

  return (
    <div className="p-6 my-10 flex">
      <aside className="w-72 mr-16">
        <nav className="flex flex-col h-full justify-between">
          <ul className="flex flex-col gap-2 p-3 font-semibold border-b-2">
            <li className="rounded-md inline-flex items-center">
              <Link to="/view/profile">Perfil</Link>
            </li>
            <li className="rounded-md inline-flex items-center">
              <Link to="adress">Direcciones</Link>
            </li>
            <li className="rounded-md inline-flex items-center">
              <Link to="orders">Pedidos</Link>
            </li>
            <li className="rounded-md inline-flex items-center">
              <button onClick={logout}>Cerrar Sesión</button>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-red-600 font-semibold mt-auto p-3">
            <li className="flex gap-x-2 items-center">
              <DeleteIcon />
              <button>Eliminar cuenta</button>
            </li>
          </ul>
        </nav>
      </aside>

      <section className="flex-1">
        <Routes>
          <Route path="/" element={<AccountInfo />} />
          <Route path="/adress" element={<AccountAdress />} />
          <Route path="/orders" element={<UserOrders />} />
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
