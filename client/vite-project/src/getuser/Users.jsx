import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

function Users() {
    const[allusers,setAllUsers]=useState([])
    const [message, setMessage] = useState("")

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
    const delfun = async (delid) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this user?")

  if (!confirmDelete) return

  try {
    const res = await axios.delete(`http://localhost:8976/api/delete/user/${delid}`)
    console.log("success:", res.data)

    // update UI instantly
    setAllUsers(allusers.filter(user => user._id !== delid))

  } catch (err) {
    console.log("error", err.response?.data)
  }
}

    // const delfun =async(delid)=>{
    //     await axios.delete(`http://localhost:8976/api/delete/user/${delid}`).then((res)=>{
    //         console.log("success:",res.data)
    //     }).catch((err)=>{
    //         console.log("error",err.response.data)
    //     })
    // }
  return (
    <div>
        <h1>All User Details</h1>
        <table border='2'>
            <tr>
                <th>CustomerName</th><th>EmailID</th><th>Address</th><th>Delete</th>
            </tr>
        {allusers.map((item,index)=>
            
            <tr>
              <td>{item.name}</td><td> {item.email}</td><td> {item.address}</td><td><button onClick={()=>delfun(item._id)}>❌DELETE</button></td>
            </tr>

        )}
        </table>
    </div>
  )
}

export default Users