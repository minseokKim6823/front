// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

export const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check localStorage on component mount
    useEffect(() => {
        const memberData = localStorage.getItem('memberdata');
        if (memberData) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLoginSuccess = () => {
        const memberData = localStorage.getItem('memberdata');
        if (memberData) {
            setIsLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('memberdata'); // Remove memberdata on logout
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLoginSuccess, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
