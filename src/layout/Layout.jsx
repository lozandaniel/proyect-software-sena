import { Link, Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import InputSearch from '../components/Header/InputSearch'
import NavMenu from '../components/Header/NavMenu'
import { useUser } from '../hooks/useUser'

import { ShoppingCartIcon, UserEditIcon, UserIcon } from '../icons/Icons'

/* Layout de la pagina web */
export default function Layout() {
  const { isAdmin, isEmployee, user } = useUser()

  return (
    <>
      <header className="mx-auto flex w-full items-center px-4 py-4 sm:px-8">
        <div className="flex flex-1 items-center">
          <Link to="/">
            <img
              src="/logo-distriquesos.png"
              alt="Logo distriquesos"
              className="hidden lg:block"
              width={250}
            />
          </Link>
          <NavMenu />
        </div>

        <div className="flex items-center justify-center gap-2">
          <InputSearch />

          <div className="flex gap-x-2">
            {user ? (
              isAdmin || isEmployee ? (
                <Link to="/view/admin/dashboard">Admin</Link>
              ) : (
                <Link to="/view/profile">
                  <UserEditIcon />
                </Link>
              )
            ) : (
              <Link to="/login">
                <UserIcon />
              </Link>
            )}
            <Link to="/cart">
              <ShoppingCartIcon />
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
