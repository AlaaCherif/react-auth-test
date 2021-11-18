import React from 'react'
import { Card ,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

function Home() {
       const nav=useNavigate()
       const {currentUser,logout}=useAuth()
       const handleSetup=()=>{
              nav("../additional")
       }
       const handleLogout=()=>
       {
              try{
                     logout();
                     nav("../login")
              }
              catch
              {
                     console.log("Failed to log out")
              }
       }
       const handleChange=()=>{
              nav("../account")
       }
       return (
              <>
              <Card>
                     <Card.Body>
                            <h2 className="text-center mb-4">My profile</h2>
                            <p><strong>Email:</strong>{currentUser.email}</p>       
                     </Card.Body>
              </Card>
              <div className="w-100 text-center mt-2">
              <Button variant="link" onClick={handleLogout}>Log out</Button>
              <Button variant="link" onClick={handleChange}>Change password</Button>
              <Button variant="link" onClick={handleSetup}>Change password</Button>
              </div>
              </>
       )
}
export default Home;

