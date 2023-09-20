import { Link, NavLink } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'

function Header() {
  return (
    <header className='container'>
      <Link className='site-logo' to='/'>
        #VANLIFE
      </Link>
      <nav>
        <NavLink
          to='/host'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          Host
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          About
        </NavLink>
        <NavLink
          to='/vans'
          className={({ isActive }) => (isActive ? 'active-link' : null)}
        >
          Vans
        </NavLink>

        <Link to='login' className='login-link'>
          <FaRegUserCircle className='login-icon' />
        </Link>
      </nav>
    </header>
  )
}

export default Header
