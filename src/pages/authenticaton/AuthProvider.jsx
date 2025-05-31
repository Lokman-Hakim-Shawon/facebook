import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
        .then(res=>{
            setLoading(false)
        })
        .catch(err=>{
            console.log('err:',err)
            setLoading(false)
        })
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])
    return <AuthContext.Provider value={{user,loading,logOut}}>{children}</AuthContext.Provider>
};

export default AuthProvider;