import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import axiosInstance from '../../../utils/axiosConfig'
import CustomInput from '../CustomInput'
import { infoInputsProvider } from '../utils/InfoCustomInputProvider'

let initialProvider = {
  name: '',
  identification: 0,
  phone: 0,
  direction: '',
  city: '',
}

function AddProviderModal({
  isEdit,
  providerList,
  setIsOpen,
  setProviderList,
}) {
  const initialData = isEdit
    ? {
        name: isEdit.name || '',
        identification: isEdit.identification || 0,
        phone: isEdit.phone || 0,
        direction: isEdit.direction || '',
        city: isEdit.city || '',
      }
    : initialProvider

  const [formData, setFormData] = useState(initialData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === 'identification' || name === 'phone' ? Number(value) : value,
    }))
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault()

    console.log(formData)

    try {
      const response = isEdit
        ? await axiosInstance.put(
            `/providers/${isEdit.providerId}/update`,
            formData
          )
        : await axiosInstance.post('/providers', formData)

      if (isEdit) {
        const findProvider = providerList.map((provider) =>
          provider.providerId === isEdit.providerId
            ? response.data.data
            : provider
        )
        setProviderList(findProvider)
      } else {
        setProviderList((prevState) => [...prevState, response.data.data])
      }
      setIsOpen(false)
      toast.success(response.data.message, {
        position: 'top-center',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-70">
      <Toaster />
      <form
        className="relative grid grid-cols-2 gap-x-12 gap-y-1 rounded-lg bg-white p-10"
        onSubmit={handleSubmitForm}
      >
        <button
          className="font-semibolds absolute right-4 top-4 rounded-md bg-primaryColor px-2 py-1 text-white hover:bg-primaryColor/90"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>

        {infoInputsProvider.map((infoInput) => (
          <CustomInput
            defaultValue={formData[infoInput.id] || ''}
            id={infoInput.id}
            key={infoInput.id}
            label={infoInput.label}
            onChange={handleChange}
            placeholder={infoInput.placeholder}
            type={infoInput.type}
          />
        ))}

        <button
          className="col-span-2 my-2 inline-flex w-full flex-grow items-center justify-center gap-x-1 rounded-lg bg-primaryColor px-4 py-2 text-sm font-medium text-white hover:bg-primaryColor/90 focus:outline-none focus:ring-4 focus:ring-primaryColor/50"
          type="submit"
        >
          {isEdit ? 'Actualizar Proveedor' : 'Crear Proveedor'}
        </button>
      </form>
    </div>
  )
}

export default AddProviderModal
