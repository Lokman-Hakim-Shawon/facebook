import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from './firebase.config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const auth = getAuth(app);
    const handleRegister = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const file = e.target.photo.files[0];

        console.log('Full data:', name, email, password, file);

        const imgbbKey = '781d0add1b0b79e37c040869de38a6fc';
        const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;

        const formData = new FormData();
        formData.append('image', file);

        try {
            // Upload image to imgbb
            const res = await fetch(imgbbUrl, {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            const photoURL = data.data.url;

            // Create user with Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update profile with name and image URL
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL,
            });

            toast('Registration successful!');
            console.log('User created:', user);
        } catch (error) {
            toast(`Error: ${error.message}`);
            console.error(error);
        }
    };

    return (
        <div className='w-full h-[80vh] lg:h-screen flex justify-center items-center'>
            <div className='shadow-2xl bg-slate-100 w-[80%] lg:w-[40%] flex flex-col justify-center items-center'>
                <h3 className='text-3xl font-bold pt-4 underline text-secondary'>Registration</h3>
                <form onSubmit={handleRegister} className='flex flex-col lg:w-[70%] gap-4 py-6'>
                    <input type='text' name='name' placeholder='Your Name' className='border-2 border-primary py-2 rounded-xl pl-4' />
                    <input type='file' name='photo' className='border-2 border-primary py-2 rounded-xl pl-4' />
                    <input type='email' name='email' placeholder='E-mail' className='border-2 border-primary py-2 rounded-xl pl-4' />
                    <input type='password' name='password' placeholder='Password' className='border-2 border-primary py-2 rounded-xl pl-4' />
                    <button className='font-bold bg-secondary rounded-xl py-2 text-white'>Submit</button>
                    <p>
                        If you have an account{' '}
                        <Link to='/login' className='text-secondary underline font-bold'>
                            login
                        </Link>
                    </p>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Registration;
