import React ,{useRef,useState} from 'react'
import { Card ,Button,Form,Alert} from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

function Account() {
       const [error, setError] = useState("")
       const nav=useNavigate()
       const {updatePassword}=useAuth()
       const passwordRef=useRef()
       const confirmPasswordRef=useRef()
       const handleHome=(e)=>
       {
              e.preventDefault()
              try{
                     nav("../home")
              }
              catch
              {
                     console.log("Failed")
              }
       }
       const handleSubmit=(e)=>{
              e.preventDefault()
              if(passwordRef.current.value!==confirmPasswordRef.current.value)
              return setError("Passwords don't match")
              try{
                     updatePassword(passwordRef.current.value);
                     nav("../home")
              }
              catch{
                     setError("Error changing password")
              }

       }
       return (
              <>
              <Card>
                     <Card.Body>
                     <h2 className="text-center mb-4">Change password</h2>
                     {error&& <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                   <Form.Group className="mb-3">
                                   <Form.Label>New password</Form.Label>
                                   <Form.Control type="password" ref={passwordRef}/>
                                   </Form.Group>
                                   <Form.Group className="mb-3">
                                   <Form.Label>Confirm New Password</Form.Label>
                                   <Form.Control type="password" ref={confirmPasswordRef}/>
                                   <Button type="submit" className="w-100 mt-3" >Update</Button>
                                   </Form.Group>
                            </Form>     
                     </Card.Body>
              </Card>
              <div className="w-100 text-center mt-2">
              <Button variant="link" onClick={handleHome}>Home</Button>
              </div>
              </>
       )
}
export default Account;

