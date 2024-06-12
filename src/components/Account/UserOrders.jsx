import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'
import axiosInstance from '../../utils/axiosConfig'
import InputCategory from '../InputCategory'

function UserOrders() {
  const [listOrders, setListOrders] = useState([])
  const { user } = useUser()

  useEffect(() => {
    const fetchOrdersByClient = async () => {
      try {
        const response = await axiosInstance.get(`/orders/${user?.clientId}`)
        setListOrders(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOrdersByClient()
  }, [user?.clientId])

  return (
    <div>
      <header className="mb-6 items-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Estado de mis pedidos
        </h2>
        <p className="text-sm">Historial de Compras</p>
      </header>
      <table className="w-full table-auto border-collapse border text-left text-sm">
        <thead className="bg-primaryColor/80 text-gray-700">
          <tr>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Fecha de compra</th>
            <th className="px-4 py-2">Productos</th>
            <th className="px-4 py-2">Más Info</th>
          </tr>
        </thead>
        <tbody>
          {listOrders.length === 0 ? (
            <span className="p-2">Actualmente no cuentas con pedidos!</span>
          ) : (
            listOrders.map((order) => {
              return (
                <tr key={order?.orderId}>
                  <td className="px-4 py-2">{order?.orderId}</td>
                  <td className="px-4 py-2">{order?.total}</td>
                  <td className="px-4 py-2">
                    <InputCategory className="bg-[#ffd0af] text-orange-800">
                      {order?.status}
                    </InputCategory>
                  </td>
                  <td className="px-4 py-2">
                    <time>{order?.buyDate}</time>
                  </td>
                  <td className="px-4 py-2">
                    {order?.listOrderItems?.length} articulos
                  </td>
                  <td className="px-4 py-2">
                    <Link
                      className="font-semibold text-primaryColor"
                      to={`/order/${order?.orderId}`}
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserOrders
