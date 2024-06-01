import { useState, useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios'
import DataTable from '../DataTable'

function Client() {
  const [listClients, setListClients] = useState([{}])

  const handleDeleteClient = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/clients/${id}`
      )
      const filterProviders = listClients.filter(
        (client) => client.clientId != id
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
    console.log('Editar fila:', row)
  }

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/clients')
        setListClients(response.data)
      } catch (error) {
        console.error('Error fetching inventory table:', error)
        // Manejar el error
      }
    }
    console.log(listClients)

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

      <section className="flex gap-x-4 items-center justify-between">
        <div className="bg-green-700 hover:bg-green-700/90 pointer-events-none py-10 px-14 font-semibold text-xl flex flex-col text-center rounded-lg text-white">
          Total de clientes
          <span>{listClients.length}</span>
        </div>
      </section>

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
