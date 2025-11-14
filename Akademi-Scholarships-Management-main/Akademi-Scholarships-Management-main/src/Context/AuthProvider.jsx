import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const AuthContext = createContext()
const provider = new GoogleAuthProvider()
import auth from '../../firebase.config'
const AuthProvider = ({ children }) => {

    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)

    const register = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    const signOutUser = () => {
        setLoader(true)
      return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null)
            }
            setLoader(false)
        })
        return () => unSubscribe()
    }, [])


    const authInfo = {
        user,
        loader,
        setUser,
        setLoader,
        register,
        login,
        signInWithGoogle,
        signOutUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;