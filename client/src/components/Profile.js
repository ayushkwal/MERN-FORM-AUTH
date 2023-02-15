import React,{useState,useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {UserContext} from '../App'
import UpdatedComponent from './AuthRoute'

function Profile({user}) {
    const {state,dispatch} = useContext(UserContext)
    const navigate = useNavigate()

   
  return (
    <>
            
          <h1>You are welcome</h1> 
          <h1>{user.email}</h1>
           
    </>
  )
}

export default UpdatedComponent(Profile)