import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function OnceRoute({children}) {
       const {firstTime}=useAuth()
       const el=firstTime?children : <Navigate to="/home" replace/>
       return (
              el
       )
}
