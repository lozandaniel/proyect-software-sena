import { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      console.log(parsedUser)
      setUser(parsedUser)
      setIsAdmin(parsedUser?.rol?.rol === 'admin')
    }
  }, [])

  console.log(user)

  const logout = () => {
    setUser(null)
    setIsAdmin(false)
    localStorage.removeItem('userInfo')
  }

  return (
    <UserContext.Provider value={{ user, isAdmin, logout }}>
      {children}
    </UserContext.Provider>
  )
}
