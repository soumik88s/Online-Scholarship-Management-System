import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useRole from '../Hooks/useRole';
import Animation from '../Components/Animation';


const AuthorizedRoute = ({ children }) => {
    const { user, role, loading, loader } = useRole();

    if (loader || loading) {
        return <Animation />
    }

    if (user && (role === 'admin' || role === 'moderator')) {
        return children;
    }

    toast.error('You are not authorized to access this page');
    return <Navigate to="/" replace />;
};

export default AuthorizedRoute;
