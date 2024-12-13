import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api.ts';
import { useGlobalAlert } from './AlertContext.tsx';

interface AuthContextProps {
    user: any;
    isAuthenticated: boolean;
    setUser: (user: any) => void;
    token: string;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState('');
    const { setGlobalAlert } = useGlobalAlert();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('accessToken');

            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                api.get('/user/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                    },
                }).then((response) => {
                    setToken(token);
                    setUser((response.data as { data: any }).data);
                    setIsAuthenticated(true);
                }).catch((error) => {
                    setIsAuthenticated(false);
                    setGlobalAlert("Your session has expired. Please log in again.", 'error');
                });
            } catch (error) {
                setIsAuthenticated(false);
                setGlobalAlert("Unable to fetch User profile", 'error');
            }
        };

        fetchUserData();
    }, [setGlobalAlert]);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, token, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) 
        throw new Error('useAuth must be used within an AuthProvider');
    
    return context;
};