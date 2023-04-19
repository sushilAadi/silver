import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Sidebar.scss'

export default function Sidebar() {
  const [login, setLogin] = useState(localStorage.getItem('login'));

  const logout = () => {
    localStorage.removeItem('login');
    window.location.href = '/signin';
  }

  return (
    <>
      {login ? (
        <div className='sidebar'>
          <>
            <div className='SidebarWrapper'>
              <NavLink to="/dashboard"><button className='btn btn-primary'>Dashboard</button></NavLink><br />
              <NavLink to="/purchaseorder"><button className='btn btn-primary'>Purchase Order</button></NavLink><br />
              <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
          </>
        </div>
      ) : (
        <>
          <NavLink to="/register"><button className='btn btn-danger'>Register</button></NavLink>
          <NavLink to="/signin"><button className='btn btn-warning'>Signin</button></NavLink>
        </>
      )}

    </>
  )
}
