import { useEffect } from 'react'
import { useState, createContext } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])
  const [totalCart, setTotalCart] = useState(0)

  const addCart = (product, quantity = 1) => {
    setCartItems((prevState) => {
      const existingProduct = prevState.find(
        (item) => item.productId === product.productId
      )
      if (existingProduct) {
        return prevState.map((item) =>
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prevState, { ...product, quantity }]
      }
    })
    // setCartItems([...cartItems, product])
  }

  const updateQuantity = (productId, quantity) => {
    return setCartItems((prevItems) => {
      console.log(prevItems)
      return prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    })
  }

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    setTotalCart(newTotal)
    console.log(cartItems)
  }, [cartItems])

  const deleteProduct = (id) => {
    const filterProduct = cartItems.filter((product) => product.productId != id)
    setCartItems(filterProduct)
  }

  const cleanCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCart,
        setCartItems,
        addCart,
        deleteProduct,
        cleanCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
