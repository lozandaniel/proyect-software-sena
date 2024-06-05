import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../utils/axiosConfig'

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalClients: 0,
    totalInventory: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalProviders: 0,
  })

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axiosInstance.get('/dashboard/view')
        console.log(response)
        setDashboardData(response.data)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }
    fetchDashboardData()
  }, [])

  return (
    <div>
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <p className="border-b-2 font-light">
        Vista general de las métricas clave
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 text-white md:grid-cols-2">
        <div className="rounded bg-cyan-700 p-4">
          <Link to="/view/admin/inventory/products">
            <h3 className="text-lg font-semibold">Total de Productos</h3>
            <p className="text-2xl">{dashboardData.totalProducts}</p>
          </Link>
        </div>
        <div className="rounded bg-[#ff7d20] p-4">
          <Link to="/view/admin/inventory">
            <h3 className="text-lg font-semibold">Total de Inventario</h3>
            <p className="text-2xl">{dashboardData.totalInventory}</p>
          </Link>
        </div>
        <div className="rounded bg-red-700 p-4">
          <Link to="/view/admin/providers">
            <h3 className="text-lg font-semibold">Total de Proveedores</h3>
            <p className="text-2xl">{dashboardData.totalProviders}</p>
          </Link>
        </div>
        <div className="rounded bg-green-700 p-4">
          <Link to="/view/admin/clients">
            <h3 className="text-lg font-semibold">Total de Clientes</h3>
            <p className="text-2xl">{dashboardData.totalClients}</p>
          </Link>
        </div>
        <div className="rounded bg-purple-700 p-4">
          <Link to="/view/admin/orders">
            <h3 className="text-lg font-semibold">Total de Pedidos</h3>
            <p className="text-2xl">{dashboardData.totalOrders}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
