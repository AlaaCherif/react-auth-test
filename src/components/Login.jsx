import React,{useRef,useState} from 'react'
import { Card,Form,Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {useNavigate,Link} from 'react-router-dom'



function Login() {
       const [error, setError] = useState("")
       const emailRef=useRef()
       const passwordRef=useRef()
       const {login,setCurrentUser}=useAuth()
       const [loading, setLoading] = useState(false)
       let history=useNavigate()
       async function handleSubmit(e){
              e.preventDefault()
              setError("")
              try{
                     
                     setLoading(true)
                     await login(emailRef.current.value,passwordRef.current.value)
                     setCurrentUser({email:emailRef.current.value,password:passwordRef.current.value})
                     history("../home" )
                     setLoading(false)
                     setError("")
              }
              catch(error){
                     
                     setError("Failed to log in. Check credentials")
                     setLoading(false)
                     emailRef.current.value=""
                     passwordRef.current.value=""
              }
              

       }
       return (
              <>
              <Card>
                     <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
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
                                   <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                            </Form>
                            <div className="w-100 text-center mt-2"><Link to="/reset-password">Forgot password?</Link></div>
                     </Card.Body>
              </Card>
              <div className="w-100 text-center mt-2">Need an account ? <Link to="/signup" >Create one.</Link></div>
              </>
       )
}

export default Login
