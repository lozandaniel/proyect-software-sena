import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import CustomInput from '../CustomInput'
import { infoInputsProvider } from '../Utils/InfoCustomInputProvider'
import axios from 'axios'
import toast from 'react-hot-toast'

let initialProvider = {
  name: '',
  identification: 0,
  phone: 0,
  direction: '',
  city: '',
}

function AddProviderModal({
  setIsOpen,
  setProviderList,
  providerList,
  isEdit,
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
        ? await axios.put(
            `http://localhost:8080/api/v1/providers/${isEdit.providerId}/update`,
            formData
          )
        : await axios.post('http://localhost:8080/api/v1/providers', formData)
      console.log(response)

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
    <div className="fixed top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-70">
      <Toaster />
      <form
        onSubmit={handleSubmitForm}
        className="grid-cols-2 grid gap-x-12 gap-y-1 bg-white p-10 rounded-lg relative"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-white font-semibolds absolute right-4 top-4 bg-primaryColor hover:bg-primaryColor/90 py-1 px-2 rounded-md"
        >
          X
        </button>

        {infoInputsProvider.map((infoInput) => (
          <CustomInput
            key={infoInput.id}
            id={infoInput.id}
            onChange={handleChange}
            type={infoInput.type}
            label={infoInput.label}
            placeholder={infoInput.placeholder}
            defaultValue={formData[infoInput.id] || ''}
          />
        ))}

        <button
          type="submit"
          className="text-white col-span-2 bg-primaryColor hover:bg-primaryColor/90 focus:ring-4 focus:outline-none
                   focus:ring-primaryColor/50 font-medium gap-x-1 rounded-lg text-sm py-2 items-center px-4 flex-grow inline-flex justify-center w-full my-2"
        >
          {isEdit ? 'Actualizar Proveedor' : 'Crear Proveedor'}
        </button>
      </form>
    </div>
  )
}

export default AddProviderModal
