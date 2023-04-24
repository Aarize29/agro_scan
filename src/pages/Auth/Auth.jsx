import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    Row, Col, Card, Button, Form, Input,
  } from 'antd';
import { signInWithEmail, signUpWithEmail } from '../../supabase/auth';
import uuid from 'react-uuid';
  
const Auth = (params) => {
    
    const navigate=useNavigate()
    const [data, setData]=useState({email:"", password:""})

    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(params.title=="SignUp"){
            const response = await signUpWithEmail(data)
            console.log(response)
        }else{
            const response = await signInWithEmail(data)
            if(response.status==200)
                navigate("/main")
        }
    }

  return (
   <>
        <h1>{params.title}</h1>
        <form>
            <input onChange={(e) => handleChange(e)} type="email" name="email" placeholder='EMAIL' value={data.email}/>
            <input onChange={(e) => handleChange(e)} type="password" name="password" placeholder='PASSWORD' value={data.password}/>
            <button onClick={(e) => handleSubmit(e)}>{params.title}</button>
            {(params.title=="SignUp")? (
            <>
                <input onChange={(e) => handleChange(e)} type="text" name="name" placeholder='USERNAME' value={data.name}/>
                <input onChange={(e) => handleChange(e)} type="text" name="city" placeholder='CITY' value={data.city}/>
                <input onChange={(e) => handleChange(e)} type="text" name="state" placeholder='STATE' value={data.state}/>
                <input onChange={(e) => handleChange(e)} type="number" name="mobile" placeholder='MOBILE' value={data.mobile}/>
            </>): null}
        </form>
   </>
  )
}

export default Auth