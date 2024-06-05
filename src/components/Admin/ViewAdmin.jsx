import { Route, Routes } from 'react-router-dom'
import AsideAdmin from './AsideAdmin'
import Client from './Clients/Client'
import Dashboard from './Dashboard'
import Inventory from './Inventory/Inventory'
import Orders from './Order/Orders'
import ProductsInfo from './Products/ProductsInfo'
import Provider from './Providers/Provider'

function ViewAdmin() {
  return (
    <div className="flex h-screen bg-gray-100">
      <AsideAdmin />
      <main className="ml-[25%] flex-1 overflow-x-auto px-14 py-12">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory/*" element={<Inventory />} />
          <Route path="inventory/products" element={<ProductsInfo />} />
          <Route path="providers" element={<Provider />} />
          <Route path="clients" element={<Client />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </main>
    </div>
  )
}

export default ViewAdmin
