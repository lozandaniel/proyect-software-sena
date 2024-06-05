import { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { AddPlusIcon } from '../../../icons/Icons'
import axiosInstance from '../../../utils/axiosConfig'
import DataTable from '../DataTable'
import AddProviderModal from './AddProviderModal'

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
        const response = await axiosInstance.get('/providers')
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
      const res = await axiosInstance.delete(`/providers/${id}`)
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

      <section className="flex items-center justify-between gap-x-4">
        <div className="pointer-events-none flex flex-col rounded-lg bg-red-700 px-14 py-10 text-center text-xl font-semibold text-white hover:bg-red-700/90">
          Total de proveedores
          <span>{providerList.length}</span>
        </div>

        <button
          onClick={openModal}
          type="button"
          className="inline-flex items-center justify-center gap-x-1 self-end rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-2 focus:ring-primaryColor/50"
        >
          <AddPlusIcon />
          Agregar nuevo proveedor
        </button>
      </section>

      {isOpen && (
        <AddProviderModal
          initialData={initialProvider}
          isEdit={isEdit}
          providerList={providerList}
          setIsOpen={setIsOpen}
          setProviderList={setProviderList}
        />
      )}

      <DataTable
        columns={[
          'providerId',
          'name',
          'identification',
          'phone',
          'direction',
          'city',
        ]}
        data={providerList}
        deleteRow={deleteRow}
        onEditClick={handleEdit}
        rowKey="providerId"
      />
    </div>
  )
}

export default Provider
