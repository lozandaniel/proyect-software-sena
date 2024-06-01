import { NavLink } from 'react-router-dom'

function CustomNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'bg-neutral-300 text-primaryColor' : ''
      }
    >
      <li>{children}</li>
    </NavLink>
  )
}

export default CustomNavLink
