import { NavLink } from 'react-router-dom'

function CustomNavLink({ to, children }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? 'bg-neutral-300 text-primaryColor' : ''
      }
      to={to}
    >
      <li>{children}</li>
    </NavLink>
  )
}

export default CustomNavLink
