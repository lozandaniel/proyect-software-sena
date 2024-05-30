import { useState, createContext } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addCart = (product) => {
    setCart([...cart, product])
  }

  const deleteProduct = (id) => {
    const filterProduct = cart.filter((product) => product.productId != id)
    setCart(filterProduct)
  }

  const cleanCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, addCart, deleteProduct, cleanCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
