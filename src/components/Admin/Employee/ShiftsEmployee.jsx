import { useEffect, useState } from 'react'
import { useUser } from '../../../hooks/useUser'
import axiosInstance from '../../../utils/axiosConfig'

function ShiftsEmployee() {
  const [shifts, setShifts] = useState([])
  const { user } = useUser()

  const employeeId = user?.clientId

  useEffect(() => {
    const fetchShifts = async () => {
      const response = await axiosInstance(`/shifts/${employeeId}`)
      setShifts(response.data)
    }
    fetchShifts()
  }, [employeeId])
  return (
    <>
      <h2 className="my-2 text-2xl font-bold">Mis horarios</h2>
      <ol className="list-disc">
        {shifts.length === 0 && (
          <span>Aun no tienes horarios establecidos.</span>
        )}
        {shifts
          .sort((a, b) => a - b)
          .map((shift) => (
            <li key={shift.shiftId}>
              {shift.shiftDate} -{' '}
              <span className="font-semibold text-green-700">
                Entrada: {shift.startTime}
              </span>{' '}
              -{' '}
              <span className="font-semibold text-red-700">
                Salida: {shift.endTime}
              </span>
            </li>
          ))}
      </ol>
    </>
  )
}

export default ShiftsEmployee
