import {Button} from 'react-bootstrap'
import React from 'react'
import {database} from '../firebase'
function TestDB() {
       const handleAdd=()=>
       {
              database.collection("test").doc("test").set({
                     working:true
              })
              .then(()=>{
                     console.log("success")
              })
              .catch((error)=>{
                     console.error(error)
              })
       }
       const handlePrint=()=>{

       }
       return (
              <>
              <Button variant="link" onClick={handleAdd}> add to db</Button>
              <Button variant="link" onClick={handlePrint}>Print from database</Button>
              </>
       )
}

export default TestDB
