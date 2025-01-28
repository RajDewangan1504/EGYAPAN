import React, { createContext, useState, useEffect } from 'react';
import { getGyapans } from '../services/ConstantServices'; // Import the service function

import { useSelector } from 'react-redux'; 
// Create the context
export const GyapanContext = createContext();


// Provide the context
export const GyapanProvider = ({ children }) => {
    const [gyapans, setGyapans] = useState([]);
    // const [loading, setLoading] = useState(true);
    const auth = useSelector(state => state.authReducer.user);

    useEffect(() => {
        // Fetch all gyapans initially
        const fetchGyapans = async () => {
            // setLoading(true);
            try {
                const response = await getGyapans(auth?.user?._id); // Assuming this fetches all gyapans
                setGyapans(response.data);
                console.log("obj",response.data);
            } catch (error) {
                console.error('Error fetching gyapans:', error);
            } finally {
                // setLoading(false);
            }
        };

        fetchGyapans();
    }, []);

    return (
        <GyapanContext.Provider value={{ gyapans, setGyapans }}>
            {children}
        </GyapanContext.Provider>
    );
};
