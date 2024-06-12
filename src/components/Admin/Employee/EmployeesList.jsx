import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../../utils/axiosConfig'

function EmployeesList() {
  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axiosInstance.get('/employees')
        setEmployeeList(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchEmployees()
  }, [])

  return (
    <div>
      <h2 className="my-4 text-2xl font-semibold">
        Lista de empleados actuales
      </h2>

      <ul className="flex flex-col rounded-md border">
        {employeeList.map((employee) => (
          <Link
            key={employee?.clientId}
            to={`/view/employee/shifts/${employee?.clientId}`}
            unstable_viewTransition
          >
            <li className="flex items-center gap-x-4 border px-4 py-3 transition-all hover:scale-105 hover:border-gray-600 hover:bg-indigo-600 hover:text-white">
              <h3 className="font-medium">{employee?.name}</h3>
              <p className="text-sm">{employee?.email}</p>
              <p className="text-sm italic">Telefono: {employee?.phone}</p>
              <span className="text-sm font-semibold">
                Area: {employee?.area?.area}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default EmployeesList
