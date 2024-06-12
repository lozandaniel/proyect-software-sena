import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../../utils/axiosConfig'
import CustomInput from '../CustomInput'

const initialValue = {
  shiftDate: '',
  startTime: '',
  endTime: '',
}

const AddShiftEmployee = () => {
  const { employeeId } = useParams()
  const [dataForm, setDataForm] = useState(initialValue)

  const shiftDateTime = new Date(dataForm.shiftDate + 'T' + dataForm.startTime)

  const resetForm = {
    client: {
      clientId: employeeId,
    },
    shiftDate: shiftDateTime,
    startTime: dataForm.startTime,
    endTime: dataForm.endTime,
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axiosInstance.post('/shifts', resetForm)
      if (response.status === 200) {
        toast.success(
          'Horario del dia: ' + resetForm.shiftDate + ' agregado con exito!'
        )
        // Restablecer el formulario si es necesario
      }
      setDataForm(initialValue)
    } catch (error) {
      console.error('Error al agregar el turno', error)
      toast.error('Hubo un error al agregar el turno')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setDataForm((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }))
  }

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md rounded-lg border border-solid bg-white p-8"
      >
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Agregar Nuevo Turno
        </h2>

        <CustomInput
          className="mb-4"
          id="shiftDate"
          label="Fecha del turno:"
          onChange={handleChange}
          required
          styleLabel="text-sm font-medium text-gray-700"
          type="date"
          value={dataForm.shiftDate}
        />

        <CustomInput
          className="mb-4"
          id="startTime"
          label="Hora de inicio:"
          onChange={handleChange}
          required
          styleLabel="text-sm font-medium text-gray-700"
          type="time"
          value={dataForm.startTime}
        />

        <CustomInput
          className="mb-4"
          id="endTime"
          label="Hora final:"
          onChange={handleChange}
          required
          styleLabel="text-sm font-medium text-gray-700"
          type="time"
          value={dataForm.endTime}
        />

        <button
          type="submit"
          className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Agregar Turno
        </button>
      </form>
    </>
  )
}

export default AddShiftEmployee
