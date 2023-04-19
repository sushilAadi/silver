import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ Componnent }) {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem('login');
    if (!login) {
      navigate('/signin');
    }
  })
  return (
    <div><Componnent /></div>
  )
}
