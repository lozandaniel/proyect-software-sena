import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axiosInstance from '../../../utils/axiosConfig'
import CustomInput from '../CustomInput'
import { infoInputsClient } from '../utils/InfoInputClient'

const listRol = [
  { id: 1, nombre: 'cliente' },
  { id: 2, nombre: 'proveedor' },
  { id: 3, nombre: 'empleado' },
  { id: 4, nombre: 'admin' },
]

function UpdateClient({
  isEdit,
  listClients,
  setIsEdit,
  setIsOpen,
  setListClients,
}) {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    if (isEdit) {
      setFormData(isEdit)
    }
  }, [isEdit])

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'rol') {
      setFormData((prevState) => ({
        ...prevState,
        rol: { rolId: parseInt(value) },
      }))
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()

    try {
      const response = await axiosInstance.put(
        `/clients/${isEdit.clientId}/update`,
        formData
      )
      const updatedClients = listClients.map((client) =>
        client.clientId === isEdit.clientId ? response.data.data : client
      )
      setListClients(updatedClients)
      setIsEdit(null)
      setIsOpen(false)
      toast.success('Cliente actualizado con exito')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-70">
      <Toaster />
      <form
        onSubmit={submitForm}
        className="relative grid grid-cols-2 gap-x-12 gap-y-1 rounded-lg bg-white p-10"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="font-semibolds absolute right-4 top-4 rounded-md bg-primaryColor px-2 py-1 text-white hover:bg-primaryColor/90"
        >
          X
        </button>
        <label htmlFor="select-rol">
          Rol
          <select
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-400"
            name="rol"
            id="select-rol"
            defaultValue={isEdit?.rol?.rolId || ''}
          >
            {listRol.map((rol) => (
              <option key={rol.id} value={rol.id}>
                {rol.nombre.charAt(0).toUpperCase() + rol.nombre.slice(1)}
              </option>
            ))}
          </select>
        </label>

        {infoInputsClient.map((infoInput) => (
          <CustomInput
            key={infoInput.id}
            id={infoInput.id}
            onChange={handleChange}
            type={infoInput.type}
            label={infoInput.label}
            placeholder={infoInput.placeholder}
            value={formData[infoInput.id] || ''}
          />
        ))}

        <button
          type="submit"
          className="col-span-2 my-2 inline-flex w-full flex-grow items-center justify-center gap-x-1 rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-4 focus:ring-primaryColor/50"
        >
          Actualizar cliente
        </button>
      </form>
    </div>
  )
}

export default UpdateClient
