import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Layout from './layout/Layout'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Register from './pages/Register'
import CardProduct from './components/Products/CardProduct'
import Contact from './pages/Contact'
import ViewAdmin from './components/Admin/ViewAdmin'
import Cart from './components/ShoppingCart/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/admin/*" element={<ViewAdmin />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/productos/:id" element={<CardProduct />} />
            <Route path="/quienes-somos/*" element={<AboutUs />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
