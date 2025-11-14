import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';
import Animation from '../Components/Animation';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        return <Animation />
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>

};

export default PrivateRoute;