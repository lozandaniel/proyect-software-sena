import { useState, useEffect } from 'react'
import { AddPlusIcon } from '../../../icons/Icons'
import axios from 'axios'
import ListClient from './ListClient'

function Client() {
  const [listClients, setListClients] = useState([{}])

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

        <button
          type="button"
          className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 justify-center inline-flex self-end"
        >
          <AddPlusIcon />
          Agregar nuevo proveedor
        </button>
      </section>

      <section>
        <ListClient listClient={listClients} />
      </section>
    </div>
  )
}

export default Client
