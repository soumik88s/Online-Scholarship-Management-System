import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider, } from "react-router-dom";
import Root from './Leyout/Root';
import Home from './Pages/HomePage/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import ScholarshipsDetails from './Pages/ScholarshipsDetails/ScholarshipsDetails';
import AllScholarships from './Pages/AllScholarshipsPage/AllScholarships';
import AuthProvider from './Context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './Context/PrivateRoute';
import AddScholarships from './Pages/Dashboard/Admin/AddScholarships';
import ManageScholarships from './Pages/Dashboard/Admin/ManageScholarships';
import Profile from './Pages/Dashboard/Admin/Profile';
import ManageApplications from './Pages/Dashboard/Admin/ManageApplications';
import AllUser from './Pages/Dashboard/Admin/AllUser';
import ManageReviews from './Pages/Dashboard/Admin/ManageReviews';
import AdminRoute from './Context/AdminRoute';
import AuthorizedRoute from './Context/AuthorizedRoute';
import MyApplication from './Pages/Dashboard/User/MyApplication';
import MyReviews from './Pages/Dashboard/User/MyReviews';
import Charts from './Pages/Dashboard/Admin/Charts';
import ErrorPage from './ErrorPage';
import ContactUs from './Pages/ContactUs/Contact';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://akademi-university-project.vercel.app/')
      },
      {
        path: '/all-scholarships',
        element: <AllScholarships />,
        loader: () => fetch('https://akademi-university-project.vercel.app/all-data')
      },
      {
        path: '/scholarship-details/:id',
        element: <ScholarshipsDetails />,
        loader: ({ params }) => fetch(`https://akademi-university-project.vercel.app/scholarship/${params.id}`)
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }

    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute ><Dashboard /></PrivateRoute>,
    children: [
      // admin routes
      {
        path: '/dashboard',
        element: <Navigate replace to={'profile'} />,
      },
      {
        index: true,
        path: 'profile',
        element: <PrivateRoute><Profile /></PrivateRoute>,
      },
      {
        path: 'add-scholarships',
        element: <AuthorizedRoute><AddScholarships /></AuthorizedRoute>
      },
      {
        path: 'manage-scholarships',
        element: <AuthorizedRoute><ManageScholarships /></AuthorizedRoute>
      },
      {
        path: 'manage-applications',
        element: <AuthorizedRoute><ManageApplications /></AuthorizedRoute>
      },
      {
        path: 'manage-users',
        element: <AdminRoute><AllUser /></AdminRoute>
      },
      {
        path: 'manage-reviews',
        element: <AuthorizedRoute><ManageReviews /></AuthorizedRoute>
      },
      {
        path: 'analytics',
        element: <AdminRoute><Charts /></AdminRoute>,
        loader: () => fetch('https://akademi-university-project.vercel.app/all-collections-data')
      },
      // user route
      {
        path: 'my-application/:id',
        element: <PrivateRoute><MyApplication /></PrivateRoute>
      },
      {
        path: 'my-reviews/:id',
        element: <PrivateRoute><MyReviews /></PrivateRoute>,
        loader: ({ params }) => fetch(`https://akademi-university-project.vercel.app/my-review/${params.id}`)
      }

    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </StrictMode>
  </AuthProvider>
)
