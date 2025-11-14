import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import { toast } from "react-toastify";
import Animation from "../Components/Animation";

const AdminRoute = ({ children }) => {
    const { user, role, loader, loading } = useRole();

    if (loader || loading) {
        return <Animation />
    }

    if (user && role === 'admin') {
        return children;
    }

    toast.error('You are not authorized to access this page')
    return < Navigate to={'/'} replace />
};

export default AdminRoute;