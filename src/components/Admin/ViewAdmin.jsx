import { Routes, Route } from 'react-router-dom'
import Provider from './Providers/Provider'
import Client from './Clients/Client'
import ProductsInfo from './Products/ProductsInfo'
import Dashboard from './Dashboard'
import AsideAdmin from './AsideAdmin'
import Inventory from './Inventory/Inventory'

function ViewAdmin() {
  return (
    <div className="flex h-screen bg-gray-100">
      <AsideAdmin />
      <main className="flex-1 py-12 px-14 ml-[25%] overflow-x-auto ">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory/*" element={<Inventory />} />
          <Route path="inventory/products" element={<ProductsInfo />} />
          <Route path="providers" element={<Provider />} />
          <Route path="clients" element={<Client />} />
        </Routes>
      </main>
    </div>
  )
}

export default ViewAdmin
