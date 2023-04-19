import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../Screens/AuthPage/SignIn';
import Register from '../Screens/AuthPage/Register';
import Dashboard from '../Screens/Dashboard';
import PurchaseOrder from '../Screens/PurchaseOrder/PurchaseOrder';
import Sidebar from './Sidebar';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';


export default function RoutePage() {
const login = localStorage.getItem('login')
  
  return (
    <Router>
      <Sidebar />
      <div className={login && "content"}>
        <Routes>
          <Route path="/" element={<ProtectedRoute Componnent={Dashboard} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute Componnent={Dashboard} />} />
          <Route path="/purchaseorder" element={<ProtectedRoute Componnent={PurchaseOrder} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>

    </Router>
  )
}
