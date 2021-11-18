import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({children}) {
       const {currentUser}=useAuth()
       const el=currentUser?children : <Navigate to="/login" replace/>
       return (
              el
       )
}
