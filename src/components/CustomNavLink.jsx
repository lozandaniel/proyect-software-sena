import { NavLink } from 'react-router-dom'

function CustomNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'bg-primaryColor text-white' : ''
      }
    >
      <li>{children}</li>
    </NavLink>
  )
}

export default CustomNavLink
