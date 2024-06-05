import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axiosInstance from '../../../utils/axiosConfig'
import UpdateClient from '../Clients/UpdateClient'
import DataTable from '../DataTable'

function Orders() {
  const [listOrders, setListOrders] = useState([])
  const [isEdit, setIsEdit] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axiosInstance.get('/orders')
        console.log(res.data)
        setListOrders(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(fetchOrders())
  }, [])

  const handleEdit = (order) => {
    setIsOpen(true)
    setIsEdit(order)
    console.log(order)
    /* setIsOpen(true) */
  }

  const deleteRow = async (id) => {
    try {
      const res = await axiosInstance.delete(`/orders/${id}`)
      const filterOrders = listOrders.filter((order) => order.orderId != id)
      setListOrders(filterOrders)
      toast.success(res.data.message, {
        position: 'top-center',
      })
    } catch (error) {
      console.log(error)
    }
    console.log(id)
  }

  return (
    <div>
      <Toaster />
      <header className="my-4 border-b-2 py-2">
        <h2 className="text-3xl font-bold">Pedidos actuales</h2>
        <p className="font-light">
          Consulta y gestiona todas las órdenes actuales en esta sección. Revisa
          el estado de cada orden, detalles del cliente, productos solicitados y
          cualquier comentario adicional para asegurar una correcta y rápida
          atención a tus clientes.
        </p>
      </header>

      <section className="flex items-center justify-between gap-x-4">
        <div className="pointer-events-none flex flex-col rounded-lg bg-purple-700 px-14 py-10 text-center text-xl font-semibold text-white hover:bg-green-700/90">
          Total de pedidos
          <span>{listOrders.length}</span>
        </div>
      </section>

      <DataTable
        columns={[
          'orderId',
          'client.name',
          'total',
          'status',
          'listOrderItems.length',
          'buyDate',
        ]}
        data={listOrders}
        deleteRow={deleteRow}
        onEditClick={handleEdit}
        rowKey="orderId"
      />
    </div>
  )
}

export default Orders
