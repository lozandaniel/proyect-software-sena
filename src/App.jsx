import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewAdmin from './components/Admin/ViewAdmin'
import InfoProduct from './components/Products/InfoProduct'
import Cart from './components/ShoppingCart/Cart'
import CheckoutPage from './components/ShoppingCart/CheckoutPage'
import OrderCard from './components/ShoppingCart/OrderCard'
import CartProvider from './context/CartContext'
import { UserProvider } from './context/UserContext'
import Layout from './layout/Layout'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import Products from './pages/Products'
import ProfileUser from './pages/ProfileUser'
import Register from './pages/Register'

/* Rutas principales */
function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/view/*" element={<ViewAdmin />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/view/profile/*" element={<ProfileUser />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order/:orderId" element={<OrderCard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<InfoProduct />} />
                <Route path="/quienes-somos/*" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
              </Route>
            </Routes>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
