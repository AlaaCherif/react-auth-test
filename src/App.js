import React from 'react'
import './app.css'
import Signup from './components/Signup'
import { AuthProvider } from './contexts/AuthContext'
import { BrowserRouter , Route,Routes } from "react-router-dom"
import Login from './components/Login'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute'
import Account from './components/Account'
import AdditionalInformation from './components/AdditionalInformation'
export default function App() {
       return (
              <div className="container">
              <div className="w-100" style={{maxWidth:"400px"}}>
              <AuthProvider>
              <BrowserRouter>
              <Routes>
                     <Route exact path="/signup" element={<Signup/>}/>
                     <Route exact path="/login" element={<Login/>}/>
                     <Route exact path="/additional" element={<PrivateRoute><AdditionalInformation/></PrivateRoute>}/>
                     <Route exact path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
                     <Route exact path="/account" element={<PrivateRoute><Account/></PrivateRoute>}/>
              </Routes>
              </BrowserRouter>
              </AuthProvider>
              </div>
              </div>
       )
}
