import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    totalProducts: 0,
    totalInventorys: 0,
    totalProviders: 0,
    totalClients: 0,
    totalOrders: 0,
  })

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/dashboard/view'
        )
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-white">
        <div className="p-4 bg-cyan-700  rounded">
          <Link to="/view/admin/inventory/products">
            <h3 className="text-lg font-semibold">Total de Productos</h3>
            <p className="text-2xl">{dashboardData.totalProducts}</p>
          </Link>
        </div>
        <div className="p-4 bg-[#ff7d20] rounded">
          <Link to="/view/admin/inventory">
            <h3 className="text-lg font-semibold">Total de Inventario</h3>
            <p className="text-2xl">{dashboardData.totalInventorys}</p>
          </Link>
        </div>
        <div className="p-4 bg-red-700  rounded">
          <Link to="/view/admin/providers">
            <h3 className="text-lg font-semibold">Total de Proveedores</h3>
            <p className="text-2xl">{dashboardData.totalProviders}</p>
          </Link>
        </div>
        <div className="p-4 bg-green-700 rounded">
          <Link to="/view/admin/clients">
            <h3 className="text-lg font-semibold">Total de Clientes</h3>
            <p className="text-2xl">{dashboardData.totalClients}</p>
          </Link>
        </div>
        <div className="p-4 bg-purple-700 rounded">
          <h3 className="text-lg font-semibold">Total de Ordenes</h3>
          <p className="text-2xl">{dashboardData.totalOrders}</p>
        </div>
      </div>
    </div>
  )
}
