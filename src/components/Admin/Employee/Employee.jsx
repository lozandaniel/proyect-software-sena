import { useState, useEffect } from 'react'
import axiosInstance from '../../../utils/axiosConfig'
import { useUser } from '../../../hooks/useUser'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

const Employee = () => {
  const { user } = useUser()
  const [shifts, setShifts] = useState([])

  const employeeId = user?.clientId

  console.log(employeeId)

  useEffect(() => {
    const fetchShifts = async () => {
      const response = await axiosInstance(`/shifts/${employeeId}`)
      setShifts(response.data)
    }
    fetchShifts()
  }, [employeeId])

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="shifts" element={<h1>Agrega</h1>} />
      </Routes>
    </div>
  )
}

export default Employee
