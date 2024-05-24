import { useState, useEffect } from 'react';
import axios from 'axios';

import { backendURL } from '@/lib/config';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsAuthenticated(false);
            return;
        }

        const validateToken = async () => {
            try {
                const response = await axios.get(`${backendURL}/validate-token`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (response.data.message === 'verified') {
                    setIsAuthenticated(true);
                } else {
                    throw new Error('Token not verified');
                }
            } catch (error) {
                console.log('Token verification error', error)
                setIsAuthenticated(false);
            }
        };
       
        validateToken();
    }, [isAuthenticated]);
    

    return isAuthenticated;
};

export default useAuth;