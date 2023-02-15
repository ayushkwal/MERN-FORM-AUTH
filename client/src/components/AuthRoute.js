import React,{Component, useState,useEffect} from 'react'
import Signin from './Signin'
import { Navigate } from 'react-router-dom'


const UpdatedComponent = OriginalComponent =>{
    function NewComponent(){
        const [isUser, setIsUser] = useState(false)
        const [loading,setLoading] = useState(true)
        const [user,setUser] = useState({})
        useEffect(() => {
            const userID = localStorage.getItem('userId');
            if(userID){
                async function fetchData(){
                    const a = await fetch('/getuser',{
                        method:'POST',
                        body:JSON.stringify({id:userID}),
                        headers:{
                            'content-type':'application/json',
                           }
                    })
                    const b = await a.json();
                    if(b.email){
                        setLoading(false)
                        setIsUser(true)
                        setUser(b)
                    }else{
                        setLoading(false)
                        setIsUser(false)
                    }
                }
                fetchData();
            }else{
                setLoading(false)
                setIsUser(false)
            }
        }, [])
        

            return loading?<p>Loading</p>:
           isUser? <OriginalComponent user={user} />:
            <Navigate replace to="/signin" />
        }
    
    return NewComponent
}
export default UpdatedComponent