import React, { useState,useRef } from 'react'
import { Card,Form,Alert,Button } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import { database } from '../firebase'



export default function AdditionalInformation() {
       const [loading, setLoading] = useState(false)
       const [error, setError] = useState("")
       const nameRef=useRef()
       const yearRef=useRef()
       const nav=useNavigate()
       const {currentUser,setfirstTime,firstTime}=useAuth()
       const handleSkip=(e)=>{

              e.preventDefault()
              setLoading(true)
              database.collection("users").doc(currentUser.email).set({
                     name:"",
                     year:""
              })
              .then(()=>{
                     nav("/home")
                     setLoading(false)
              })
       }
       const handleSubmit=(e)=>{
              e.preventDefault()
              setLoading(true)
              database.collection("users").doc(currentUser.email).set({
                     name:nameRef.current.value,
                     year:yearRef.current.value
              })
              .then(()=>{
                     console.log("Added successfully !")
                     setfirstTime(false)
                     nav("/home")
              })
              .catch((error)=>{
                     setError(error)
              })
              setLoading(false)
       }
       if(firstTime)
       {
              return (
                     <>
                     <Card>
                            <Card.Body>
                            <h2 className="text-center mb-4">Personnal Information</h2>
                            {error&& <Alert variant="danger">{error}</Alert>}
                                   <Form onSubmit={handleSubmit}>
                                          <Form.Group className="mb-3">
                                          <Form.Label>Name</Form.Label>
                                          <Form.Control type="text" ref={nameRef}/>
                                          </Form.Group>
                                          <Form.Group className="mb-3">
                                          <Form.Label>Year of birth</Form.Label>
                                          <Form.Control type="text" ref={yearRef}/>
                                          <Button disabled={loading} type="submit" className="w-100 mt-3" >Set</Button>
                                          </Form.Group>
                                   </Form>     
                            </Card.Body>
                     </Card>
                     <div className="w-100 text-center mt-2">
                     <Button variant="link" onClick={handleSkip}>Skip</Button>
                     </div>
                     </>
              )
       }
       else
       return(
              <Navigate to="/home" replace/>
       )
}
