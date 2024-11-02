import React from 'react'
import { useForm } from 'react-hook-form'
function Login() {
    let {handleSubmit,register,formState:{errors}} = useForm()
    const loginuser = (data) => {
        console.log(data)
    }
  return (
    <div className='container mt-5'>
        <h1 className='text-center'>Login</h1>
        <div className='row'>
            <form action="" className='col-sm-10 m-auto col-md-6 col-lg-4' onSubmit={handleSubmit(loginuser)}>
                <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email</label>
                    <input type="email" id='email' {...register('email',{required:true})} placeholder='Enter your email' className='form-control norfont'/>
                    {errors.email?.type === 'required' && <p className='text-danger norfont'>*Email is required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input type="password" id='password' {...register('password',{required:true})} placeholder='Enter your password' className='form-control norfont'/>
                    {errors.password?.type === 'required' && <p className='text-danger norfont'>*Password is required</p>}
                </div>
                <input type="submit"value={"Login"} className='mt-3 btn btn-primary w-100'/>
            </form>
        </div>
    </div>
  )
}

export default Login