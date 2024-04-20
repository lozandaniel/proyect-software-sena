import { Outlet } from 'react-router-dom'
import InputSearch from '../components/InputSearch'
import { UserIcon, ShoppingCartIcon } from '../icons/Icons'
import NavMenu from '../components/NavMenu'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header className="w-full mx-auto flex items-center px-8 py-4">
        <div className="flex items-center flex-1">
          <Link to="/">
            <img
              src="/logo-distriquesos.png"
              alt="Logo distriquesos"
              width={'250px'}
            />
          </Link>
          <NavMenu />
        </div>

        <div className="flex items-center justify-center gap-x-6">
          <InputSearch />

          <Link to="/login">
            <UserIcon />
          </Link>
          <Link to="/cart">
            <ShoppingCartIcon />
          </Link>
        </div>
      </header>

      <main className="container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
