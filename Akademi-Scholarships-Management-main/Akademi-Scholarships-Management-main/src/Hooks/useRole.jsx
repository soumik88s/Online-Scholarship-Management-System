import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useRole = () => {
    const [role, setRole] = useState('user');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const { user, loader } = useContext(AuthContext);
    const [userId, setUserId] = useState(null)
    useEffect(() => {
        if (user?.email) {
            fetch(`https://akademi-university-project.vercel.app/users/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setRole(data.role)
                    setUserId(data._id)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err)
                    setLoading(false)
                });
        }
    }, [user?.email]);

    return { user, userId, loader, role, loading, error };
};

export default useRole;
