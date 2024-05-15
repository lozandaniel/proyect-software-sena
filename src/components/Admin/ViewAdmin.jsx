import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Inventory from './Inventory'
import Provider from './Providers/Provider'
import ListClient from './Clients/ListClient'

function ViewAdmin() {
  return (
    <div className="flex h-screen">
      <aside className="flex-none w-3/12 bg-cyan-500 flex flex-col items-center py-4 fixed h-screen">
        <header>
          <Link to="/view/admin">
            <img
              src="/logo-distriquesos.png"
              alt="Logo distriquesos Charles"
              className="w-64"
            />
          </Link>
        </header>
        <nav className="w-full">
          <ul className="*:bg-emerald-600 *:p-4 *:rounded-md flex flex-col gap-2 m-4 font-semibold">
            <li>
              <Link>Vista</Link>
            </li>
            <li>
              <details>
                <summary>Inventario</summary>
                <ul className="px-10 py-1">
                  <li>
                    <Link to="inventory">Gestionar Productos</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="providers">Proveedores</Link>
            </li>
            <li>
              <Link to="clients">Clientes</Link>
            </li>
            <li>
              <Link>Pedidos</Link>
            </li>
            <li>
              <Link>Facturacion Electronica</Link>
            </li>
            <li>
              <Link>Recursos humanos</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 py-12 px-14 ml-[25%] bg-green-400">
        <Routes>
          <Route path="/" element={<h1>Hola</h1>} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="providers" element={<Provider />} />
          <Route path="clients" element={<ListClient />} />
        </Routes>
      </main>
    </div>
  )
}

export default ViewAdmin
