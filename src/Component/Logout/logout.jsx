import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the login state from localStorage
        localStorage.removeItem('isLoggedIn');
        alert('You have been logged out successfully!');
        navigate('/login'); // Redirect to the login page
    }, [navigate]);

    return null; // Optionally, you can display a message while redirecting
};

export default Logout;
