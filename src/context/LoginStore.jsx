import React, { useState } from 'react'
import {loginContext} from './loginContext'
import axios from 'axios'
function LoginStore({children}) {
    let [status,setStatus] = useState(false)
    let [err,setErr] = useState('')
    const loginuser = async (data) => {
        try{
            const response = await axios.get(`http://localhost:3000/users?email=${data.email}`)
            console.log(response)
            if(response.data[0]===undefined){
                setErr('User not found')
            }
            else if(response.data[0].password===data.password){
                setStatus(true)
                localStorage.setItem('user',JSON.stringify(response.data[0]))
                setErr('')
            }
            else setErr('Incorrect password')
        }
        catch (error) {
            console.log(error.message)
            setErr(error.message)
        }
    }
    const logoutuser = () =>{
        setStatus(false)
        localStorage.removeItem('user')
    }
  return (
    <loginContext.Provider value={{loginuser,logoutuser,status,setStatus,err,setErr}}>
        {children}    
    </loginContext.Provider>
  )
}

export default LoginStore