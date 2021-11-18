import React, { createContext, useContext, useState,useEffect } from 'react'
import { auth } from '../firebase'
import { database } from '../firebase'


const AuthContext=createContext()
export function useAuth()
{
       return useContext(AuthContext)
}

export  function AuthProvider({children}) {
       const [firstTime, setfirstTime] = useState(true)
       const [currentUser, setCurrentUser] = useState() 
       const  [loading, setLoading] = useState(true)
       function signup(email,password) {
              database.collection("users").doc(email).set({
                     exists:true
              })
              return auth.createUserWithEmailAndPassword(email,password)
       }
       const login=(email,password)=>{
              return auth.signInWithEmailAndPassword(email,password)
       }
       const logout=()=>{
              return auth.signOut()
       }
       const updatePassword=(password)=>{
              return currentUser.updatePassword(password);
       }
       useEffect(()=>{
              const unsub=auth.onAuthStateChanged(user=>{
                     setCurrentUser(user)
                     setLoading(false)
              })
              return unsub
       },[])
       const value={
              currentUser,
              signup,
              login,
              setCurrentUser,
              logout,
              updatePassword,
              firstTime,
              setfirstTime
       }
       return (
              <AuthContext.Provider value={value}>
                     {!loading &&children}
              </AuthContext.Provider>

       )
}
