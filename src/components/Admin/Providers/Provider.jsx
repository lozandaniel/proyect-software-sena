import { useEffect, useState } from 'react'
import { AddPlusIcon } from '../../../icons/Icons'
import AddProviderModal from './AddProviderModal'
import DataTable from '../DataTable'
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios'

let initialProvider = [
  {
    name: '',
    identification: 0,
    phone: 0,
    direction: '',
    city: '',
  },
]

function Provider() {
  const [providerList, setProviderList] = useState(initialProvider)
  const [isEdit, setIsEdit] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(!isOpen)
    setIsEdit(null)
  }

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

  const handleEdit = (provider) => {
    setIsEdit(provider)
    console.log(provider)
    setIsOpen(true)
  }

  const deleteRow = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/providers/${id}`
      )
      const filterProviders = providerList.filter(
        (provider) => provider.providerId != id
      )
      setProviderList(filterProviders)
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
          onClick={openModal}
          type="button"
          className="text-white bg-primaryColor hover:bg-primaryColor/90 focus:ring-2 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 justify-center inline-flex self-end"
        >
          <AddPlusIcon />
          Agregar nuevo proveedor
        </button>
      </section>

      {isOpen && (
        <AddProviderModal
          setIsOpen={setIsOpen}
          initialData={initialProvider}
          setProviderList={setProviderList}
          providerList={providerList}
          isEdit={isEdit}
        />
      )}

      <DataTable
        data={providerList}
        rowKey="providerId"
        deleteRow={deleteRow}
        onEditClick={handleEdit}
        columns={[
          'providerId',
          'name',
          'identification',
          'phone',
          'direction',
          'city',
        ]}
      />
    </div>
  )
}

export default Provider
