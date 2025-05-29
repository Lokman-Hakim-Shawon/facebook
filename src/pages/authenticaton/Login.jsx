import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from './firebase.config';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const auth=getAuth(app)
    const handleLogin=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log('login Data = ',email,password)
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            const user=res.user
            console.log('login successful',user)
            toast('Login Successful !')
        })
        .catch(err=>{
            const errMessage=err.message
            console.log(err)
            console.log(errMessage)
            toast('Error : ',errMessage)
        })
    }
    return (
        <div className='w-full h-[80vh] lg:h-screen flex justify-center items-center'>
           <div className='shadow-2xl bg-slate-100 w-[80%] lg:w-[40%] flex flex-col justify-center items-center'>
            <h3 className='text-3xl font-bold pt-4 underline text-secondary'>Login</h3>
            <form onSubmit={handleLogin} className='flex flex-col w-[70%] gap-4 py-6'>
                <input name='email' type='email' placeholder='E-mail' className='border-2 border-primary py-2 rounded-xl pl-4'/>
                <input name='password' type='password' placeholder='password' className='border-2 border-primary py-2 rounded-xl pl-4'/>
                <button className='font-bold bg-secondary rounded-xl py-2 text-white'>Submit</button>
            <p>Are you new user? <Link to='/registration' className='text-secondary underline font-bold'>registration</Link> </p>
            <ToastContainer/>
            </form>
           </div>
        </div>
    );
};

export default Login;