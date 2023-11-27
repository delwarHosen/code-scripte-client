import React from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const user = { displayName: "Delwar" }

    const userInfo = { user }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;