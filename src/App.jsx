import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Layout from './layout/Layout'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import ViewAdmin from './components/Admin/ViewAdmin'
import Cart from './components/ShoppingCart/Cart'
import { UserProvider } from './context/UserContext'
import InfoProduct from './components/Products/InfoProduct'
import CartProvider from './context/CartContext'
import CheckoutPage from './components/ShoppingCart/CheckoutPage'
import ProfileUser from './pages/ProfileUser'

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
              <Route path="/view/admin/*" element={<ViewAdmin />} />
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/view/profile" element={<ProfileUser />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
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
