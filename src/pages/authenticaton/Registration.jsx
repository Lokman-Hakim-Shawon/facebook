import React from 'react';
import { Link } from 'react-router-dom';
import {getAuth,createUserWithEmailAndPassword, updateProfile, onAuthStateChanged} from 'firebase/auth'
import app from './firebase.config';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

const Registration = () => {
    const auth =getAuth(app)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                console.log('user is signed in',user.uid)
                toast('user login')
            }
            else{
                console.log('No user is signed')
                toast('no user login')
            }
        })
        return unsubscribe
       },[auth])
    const handleRegister=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log('full data : ',name,email,password)
         //login and logout information
       

        //register user
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            const user=res.user
            console.log('user successfull',user)

            //update name
            updateProfile(auth.currentUser,{
                displayName:name
            })
            toast('Registration successful! with ',res.email)
        })
        .catch((error)=>{
            const errorCode=error.code
            const errorMessage=error.message
            toast('error: ',errorMessage)
        })

       
    }

    return (
        <div className='w-full  h-screen lg:flex lg:justify-center lg:items-center'>
           <div className='shadow-2xl lg:bg-slate-100 w-[80%] lg:w-[40%] flex flex-col justify-center my-48 mx-24 lg:my-0 lg:mx-0 items-center '>
            <h3 className='text-3xl font-bold pt-4 underline text-secondary'>Registration</h3>
            <form  onSubmit={handleRegister} className='flex flex-col lg:w-[70%] gap-4 py-6  w-[70%]'>
                <input type='text' name='name' placeholder='Your Name' className='border-2 border-primary py-2 rounded-xl pl-4'/>
                <input type='email' name='email' placeholder='E-mail' className='border-2 border-primary py-2 rounded-xl pl-4'/>
                <input type='password' name='password' placeholder='password' className='border-2 border-primary py-2 rounded-xl pl-4'/>
                <button className='font-bold bg-secondary rounded-xl py-2 text-white'>Submit</button>
            <p>If you have an account <Link to='/login' className='text-secondary underline font-bold'>login</Link> </p>
            <ToastContainer/>
            </form>
           </div>
        </div>
    );
};

export default Registration;