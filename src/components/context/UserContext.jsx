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
      setUser(parsedUser)
      setIsAdmin(storedUser && storedUser.rol === 'admin')
    }
    console.log(isAdmin)
  }, [])

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
