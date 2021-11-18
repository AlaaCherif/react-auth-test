import React,{useRef,useState} from 'react'
import { Card,Form,Button,Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'


function Signup() {
       const nav=useNavigate()
       const emailRef=useRef()
       const passwordRef=useRef()
       const {signup,firstTime,setfirstTime}=useAuth()
       const confirmPasswordRef=useRef()
       const [loading, setLoading] = useState(false)
       const [error, setError] = useState("")
       async function handleSubmit(e){
              e.preventDefault()
              if(passwordRef.current.value!==confirmPasswordRef.current.value)
              return setError("Passwords don't match")
              try{
                     setError("")
                     setLoading(true)
                     await signup(emailRef.current.value,passwordRef.current.value)
                     setLoading(false)
                     setfirstTime(true)
                     nav("/additional")
              }
              catch(error){
                     
                     setError("Error creating account")
                     setLoading(false)
              }
              

       }
       return (
              <Card>
                     <Card.Body>
                            <h2 className="w-100 text-center mb-4">Sign Up</h2>
                            {error&& <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                   <Form.Group className="mb-3">
                                   <Form.Label>Email Address</Form.Label>
                                   <Form.Control type="email" ref={emailRef}/>
                                   </Form.Group>
                                   <Form.Group className="mb-3">
                                   <Form.Label>Password</Form.Label>
                                   <Form.Control type="password" ref={passwordRef}/>
                                   </Form.Group>
                                   <Form.Group className="mb-3">
                                   <Form.Label>Confirm Password</Form.Label>
                                   <Form.Control type="password" ref={confirmPasswordRef}/>
                                   </Form.Group>
                                   <Button disabled={loading} className="w-100" type="submit">Register</Button>
                            </Form>
                            <div className="w-100 text-center mt-2">Already have an account?<Link to="/login"> Log in</Link></div>
                     </Card.Body>
              </Card>
       )
}

export default Signup
