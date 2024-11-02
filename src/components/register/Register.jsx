import React from 'react'
import { useForm } from 'react-hook-form'
import './Register.css'
function Register() {
    let {handleSubmit,register,formState:{errors}} = useForm()
    const reguser = (obj)=>{
        if(obj.password !== obj.conpassword){
            alert("Password does not match")
        }
        else
        console.log(obj)
    }
  return (
    <div className='container mt-5'>
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