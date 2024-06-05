import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import axiosInstance from '../../../utils/axiosConfig'
import DataTable from '../DataTable'
import UpdateClient from './UpdateClient'

function Client() {
  const [listClients, setListClients] = useState([])
  const [isEdit, setIsEdit] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleDeleteClient = async (id) => {
    try {
      const res = await axiosInstance.delete(`/clients/${id}`)
      const filterProviders = listClients.filter(
        (client) => client.clientId !== id
      )
      setListClients(filterProviders)
      toast.success(res.data.message, {
        position: 'top-center',
      })
    } catch (error) {
      console.log(error)
    }
    console.log(id)
  }

  const handleEditClick = (row) => {
    setIsEdit(row)
    setIsOpen(true)
  }

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axiosInstance.get('/clients')
        setListClients(response.data)
      } catch (error) {
        console.error('Error fetching inventory table:', error)
        // Manejo dsel error
      }
    }
    fetchClients()
  }, [])

  return (
    <div>
      <Toaster />
      <header className="my-4 border-b-2 py-2">
        <h2 className="text-3xl font-bold">Clientes</h2>
        <p className="font-light">
          Ingresa los detalles básicos del cliente, como su nombre,
          identificación, contacto y dirección, para mantener un registro
          preciso de tus clientes.
        </p>
      </header>

      <section className="flex items-center justify-between gap-x-4">
        <div className="pointer-events-none flex flex-col rounded-lg bg-green-700 px-14 py-10 text-center text-xl font-semibold text-white hover:bg-green-700/90">
          Total de clientes
          <span>{listClients.length}</span>
        </div>
      </section>

      {isOpen && (
        <UpdateClient
          setIsOpen={setIsOpen}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          setListClients={setListClients}
          listClients={listClients}
        />
      )}

      <DataTable
        columns={[
          'clientId',
          'rol.rol',
          'identification',
          'phone',
          'email',
          'direction',
          'registerDate',
        ]}
        rowKey="clientId"
        data={listClients}
        deleteRow={handleDeleteClient}
        onEditClick={handleEditClick}
      />
    </div>
  )
}

export default Client
