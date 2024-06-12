import { Route, Routes } from 'react-router-dom'
import AsideAdmin from './AsideAdmin'
import Client from './Clients/Client'
import Dashboard from './Dashboard'
import Employee from './Employee/Employee'
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
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/inventory/*" element={<Inventory />} />
          <Route path="admin/inventory/products" element={<ProductsInfo />} />
          <Route path="admin/providers" element={<Provider />} />
          <Route path="admin/clients" element={<Client />} />
          <Route path="admin/orders" element={<Orders />} />
          <Route path="employee/*" element={<Employee />} />
        </Routes>
      </main>
    </div>
  )
}

export default ViewAdmin
