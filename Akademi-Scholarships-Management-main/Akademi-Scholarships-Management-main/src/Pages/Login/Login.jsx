import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import googleImg from '../../assets/googleLogo.png'
import { Link, useNavigate } from "react-router-dom";
import useCreateUser from "../../Hooks/useCreateUser";
import auth from "../../../firebase.config";
const Login = () => {
    const { login, setUser, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const { createUser, data, error } = useCreateUser()

    // email password log in
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { email, password } = Object.fromEntries(formData);
        login(email, password)
            .then(res => {
                setUser(res.user)
                createUser(auth.currentUser)
                toast.success('Log in success')
                navigate('/');
            })
            .catch(err => toast.error('Invalid credentials'))
    }

    // google log in
    const handleGoogleSignin = () => {
        signInWithGoogle()
            .then((userCredential) => {
                toast.success('User registered successfully');
                setUser(userCredential.user);
                createUser(auth.currentUser)
                navigate('/');
            })
            .catch(err => toast.error('Registration failed. Please try again'))
    }
    const handleAdminLogin = () => {
        login(import.meta.env.VITE_ADMIN_EMAIL, import.meta.env.VITE_ADMIN_PASSWORD)
            .then(res => {
                setUser(res.user)
                createUser(auth.currentUser)
                toast.success('Logged in as admin')
                navigate('/');
            })
            .catch(err => toast.error('Invalid credentials or Something went wrong'))
    }
    const handleModeratorLogin = () => {
        login(import.meta.env.VITE_MODERATOR_EMAIL, import.meta.env.VITE_MODERATOR_PASSWORD)
            .then(res => {
                setUser(res.user)
                createUser(auth.currentUser)
                toast.success('Logged in as moderator')
                navigate('/');
            })
            .catch(err => toast.error('Invalid credentials or Something went wrong'))
    }
    return (
        <div>
            <div className="flex py-20 justify-center items-center bg-base-200 ">
                <div className="p-16 card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <div>
                        <h2 className='text-center text-5xl p-2'> Welcome Back </h2>
                    </div>
                    <form onSubmit={handleSubmit} className="card-body p-0">
                        <div className="form-control">
                            <input name='email' type="email" placeholder="Email" className=" placeholder:text-[#22281E] border-b-2 border-black border-opacity-70 py-3 focus:outline-none placeholder:text-opacity-70" required />
                        </div>
                        <div className="form-control">
                            <input name='password' type="password" placeholder="Password" className="placeholder:text-[#22281E] border-b-2 border-black border-opacity-70 py-3 focus:outline-none placeholder:text-opacity-70" required />
                        </div>
                        <div>
                            <h3 className="text-sm py-3">New to this website? <Link className="hover:border-b border-black" to="/register">Register now</Link></h3>
                        </div>
                        <div className="flex items-center justify-center ">
                            <p onClick={handleGoogleSignin} className=" btn bg-white border-none shadow-none hover:bg-white max-w-max">
                                <img className="w-8 " src={googleImg} alt="Google" />
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn hover:bg-[#0c7d4a] bg-[#1a583c] text-white text-base">Login</button>
                        </div>
                    </form>
                    <div class="divider">Direct Log In As</div>
                    <div className="flex mx-auto justify-center  space-x-4">
                        <button onClick={handleAdminLogin} className="btn hover:bg-[#0c7d4a] bg-[#1a583c] text-white text-base">Admin</button>
                        <button onClick={handleModeratorLogin} className="btn hover:bg-[#0c7d4a] bg-[#1a583c] text-white text-base">Moderator</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;