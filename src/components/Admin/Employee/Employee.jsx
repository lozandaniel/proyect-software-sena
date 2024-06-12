import { Route, Routes } from 'react-router-dom'
import AddShiftEmployee from './AddShiftEmployee'
import EmployeesList from './EmployeesList'
import ShiftsEmployee from './ShiftsEmployee'

const Employee = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShiftsEmployee />} />
        <Route path="shifts" element={<EmployeesList />} />
        <Route path="shifts/:employeeId" element={<AddShiftEmployee />} />
      </Routes>
    </div>
  )
}

export default Employee
