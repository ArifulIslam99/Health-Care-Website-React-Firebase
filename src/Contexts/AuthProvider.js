import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const Authcontext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <Authcontext.Provider value={allContext}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;