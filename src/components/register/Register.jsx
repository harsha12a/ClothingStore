import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import './Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {loginContext} from '../../context/loginContext'
function Register() {
    let {handleSubmit,register,formState:{errors}} = useForm()
    let navigate = useNavigate()
    let {err, setErr} = useContext(loginContext)
    const reguser = async (obj)=>{
        if(obj.password !== obj.conpassword){
            setErr('Password does not match')
        }
        else{
            setErr('')
            obj.cart = []
            const response = await axios.post('http://localhost:3000/users',obj)
            if(response.status===201){
                navigate('/login',{state:{msg:"Registered successfully"}})
            }
        }
    }
  return (
    <div className='container mt-5'>
        {
            err && <p className='text-danger fs-1 text-center norfont'>{err}</p>
        }
        <h1 className='text-center'>Register</h1>
        <div className="row">
            <form action="" onSubmit={handleSubmit(reguser)} className='col-sm-10 col-md-6 col-lg-4 m-auto'>
                <div className="mb-3">
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" {...register('name',{required:true})} className='form-control norfont' placeholder='Enter your name'/>
                    {errors.name?.type === 'required' && <p className='text-danger norfont'>*Name is required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" {...register('email',{required:true})} className='form-control norfont' placeholder='Enter your email'/>
                    {errors.email?.type === 'required' && <p className='text-danger norfont'>*Email is required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className='form-label'>Contact no.</label>
                    <input type="number" {...register('contact',{required:true,minLength:10,maxLength:10})} className='form-control norfont' placeholder='Enter your contact number'/>
                    {errors.contact?.type === 'required' && <p className='text-danger norfont'>*Contact no. is required</p>}
                    {errors.contact?.type === 'minLength' && <p className='text-danger norfont'>*Contact no. must be 10 digits</p>}
                    {errors.contact?.type === 'maxLength' && <p className='text-danger norfont'>*Contact no. must be 10 digits</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className='form-label'>Username</label>
                    <input type="text" {...register('username',{required:true})} className='form-control norfont' placeholder='Enter your username'/>
                    {errors.username?.type === 'required' && <p className='text-danger norfont'>*Username is required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input type="password" {...register('password',{required:true})} className='form-control norfont' placeholder='Enter your password'/>
                    {errors.password?.type === 'required' && <p className='text-danger norfont'>*Password is required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="conpassword" className='form-label'>Confirm Password</label>
                    <input type="password" {...register('conpassword',{required:true})} className='form-control norfont' placeholder='Confirm your password'/>
                    {errors.password?.type === 'required' && <p className='text-danger norfont'>*Confirming Password is required</p>}
                </div>
                <input type="submit" value="Register" className='mt-3 btn btn-primary w-100'/>
            </form>
        </div>
    </div>
  )
}

export default Register