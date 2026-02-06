import React from 'react'
import { useState } from 'react'
import axios from "axios"
function AddUser() {
    const users ={
        name:"",
        email:"",
        address:""
    }
    const[user,setUser]=useState(users)
    const[result,setResult]=useState(null)
    const inputhandler =(e)=>{
        const {name,value}=e.target
        setUser({...user, [name]:value })
    }
    const submitForm =(e)=>{
        // e.preventDefault()
        console.log(user)
        axios.post("http://localhost:8976/api/user",user).then((res)=>{
            console.log(res)
            setResult(res.data)
        }).catch((err) => {
      if (err.response) {
        setResult(err.response.data)
      } else {
        setResult({ message: "Something went wrong" })
      }
    })
    }
  return (
    <div>
        <form onSubmit={submitForm}>
        <input type='text'
            id='name'
            onChange={inputhandler}
            name='name'
            autoComplete='off'
            placeholder='Enter Your Name'
        />
        <input type='text'
            id='email'
            onChange={inputhandler}
            name='email'
            autoComplete='off'
            placeholder='Enter Your Email'
        />
        <input type='text'
            id='address'
            onChange={inputhandler}
            name='address'
            autoComplete='off'
            placeholder='Enter Your Address'
        />
        <button type='submit'>Submit</button>
        </form>
        {result!==null && result.message}
    </div>
  )
}

export default AddUser