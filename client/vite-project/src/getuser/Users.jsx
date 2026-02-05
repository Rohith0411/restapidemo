import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

function Users() {
    const[allusers,setAllUsers]=useState([])
    useEffect(()=>{
        async function show(){

            await axios.get("http://localhost:8976/api/users").then((res)=>{
                setAllUsers(res.data)
                console.log(res.data)
            }).catch((err)=>{
                console.log(err.response.data)
            })
        }
        show()
    },[])
  return (
    <div>
        <h1>All User Details</h1>
        <table border='2'>
        {allusers.map((item,index)=>
            <tr>
              <td>{item.name}</td><td> {item.email}</td><td> {item.address}</td>
            </tr>

        )}
        </table>
    </div>
  )
}

export default Users