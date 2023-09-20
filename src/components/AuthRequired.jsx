import { Outlet, Navigate } from 'react-router-dom'

function AuthRequired() {
  const authenticated = false

  if (!authenticated)
    return <Navigate to='/login' state={{ message: 'You must Log in first' }} />
  return <Outlet />
}

export default AuthRequired
