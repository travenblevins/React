'use client'

import { initializeFirebase } from '@/services/firebase';
import { createContext, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const FirebaseAuthContext = createContext(null);

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        initializeFirebase();
        const authInstance = getAuth();
        setAuth(authInstance);

        const unSubscribe = authInstance.onAuthStateChanged((user) => {
            console.log('User state change:', user);
            setUser(user);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    return (
        <FirebaseAuthContext.Provider value={{ auth, user }}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export { FirebaseAuthContext };
export default FirebaseAuthProvider;
