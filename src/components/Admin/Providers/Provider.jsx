import { useEffect, useState } from 'react'
import { AddPlusIcon } from '../../../icons/Icons'
import DataTable from '../DataTable'
import axios from 'axios'

function Provider() {
  const [providerList, setProviderList] = useState([{}])

  console.log()

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/providers'
        )
        setProviderList(response.data)
      } catch (error) {
        console.error('Error fetching provider table:', error)
        // Manejar el error
      }
    }

    fetchProvider()
  }, [])

  return (
    <div>
      <header className="my-4 border-b-2 py-2">
        <h2 className="text-3xl font-bold">Proveedores</h2>
        <p className="font-light">
          Administra eficientemente tus proveedores aquí. Puedes agregar nuevos
          proveedores, editar la información existente o eliminar aquellos que
          ya no necesites. Mantén tu lista de proveedores actualizada.
        </p>
      </header>

      <section className="flex gap-x-4 items-center justify-between">
        <div className="bg-red-700 hover:bg-red-700/90 pointer-events-none py-10 px-14 font-semibold text-xl flex flex-col text-center rounded-lg text-white">
          Total de proveedores
          <span>{providerList.length}</span>
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

      <section className="my-4">
        <DataTable data={providerList} rowKey="providerId" />
      </section>
    </div>
  )
}

export default Provider
