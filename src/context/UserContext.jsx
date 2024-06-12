import { useState, useEffect, createContext } from 'react'
import axiosInstance from '../utils/axiosConfig'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isEmployee, setIsEmployee] = useState(false)
  const navigate = useNavigate()

  console.log(isEmployee)

  useEffect(() => {
    const fetchInfoUser = async () => {
      try {
        const response = await axiosInstance.get('/clients/info')
        setUser(response.data)
        setIsEmployee(
          response.data?.area != null && response.data?.rol?.rol === 'empleado'
        )
        setIsAdmin(response.data?.rol?.rol === 'admin')
      } catch (error) {
        setUser(null)
        console.error(error)
      }
    }
    fetchInfoUser()
  }, [])

  const logout = async () => {
    try {
      await axiosInstance.post('/user/logout')
      setUser(null)
      setIsEmployee(false)
      setIsAdmin(false)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ user, isAdmin, isEmployee, logout }}>
      {children}
    </UserContext.Provider>
  )
}
