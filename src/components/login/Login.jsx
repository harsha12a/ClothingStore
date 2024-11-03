import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginContext } from '../../context/loginContext'
import { useLocation } from 'react-router-dom'
import { toast,ToastContainer,Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    let navigate = useNavigate()
    let {handleSubmit,register,formState:{errors}} = useForm()
    let location = useLocation()
    let msg = location.state?.msg
    let {loginuser,status,err} = useContext(loginContext)
    useEffect(()=>{
        if(status===true){
            navigate('/',{state:{msg:"Login success"}})
        }
    },[status])
    useEffect(()=>{
        if(msg){
            toast('🎉 Registration successful', {
                position: "top-center",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    },[msg])
  return (
    <div className='container mt-5'>
        {err && <p className='text-danger fs-1 text-center norfont'>{err}</p>}
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
        <ToastContainer />
    </div>
  )
}

export default Login