import { useState, useEffect, createContext } from 'react'
import axiosInstance from '../utils/axiosConfig'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchInfoUser = async () => {
      try {
        const response = await axiosInstance.get('/clients/info')
        setUser(response.data)
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
      setIsAdmin(false)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ user, isAdmin, logout }}>
      {children}
    </UserContext.Provider>
  )
}
