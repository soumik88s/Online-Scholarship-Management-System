import React, { useEffect } from 'react';
import Admin from './Admin/AdminDashboard';
import User from './User/User';
import Moderator from './Moderator/Moderator';
import { useNavigate } from 'react-router-dom';
import useRole from '../../Hooks/useRole';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const navigate = useNavigate();
    const { role, user, loader } = useRole();

    useEffect(() => {
        if (!loader && !user) {
            toast.error('You need to login to access the dashboard');
            navigate('/login');
        }
    }, [loader, user, navigate]);


    if (role === 'admin') {
        return <Admin />;
    }

    if (role === 'moderator') {
        return <Moderator />;
    }

    if (role === 'user') {
        return <User />;
    }


    useEffect(() => {
        if (!loader && user && !['admin', 'moderator', 'user'].includes(role)) {
            toast.error('You are not authorized to access this page');
            navigate('/');
        }
    }, [role, loader, user, navigate]);

    return null;
};

export default Dashboard;