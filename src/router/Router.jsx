import { createBrowserRouter, Navigate } from "react-router-dom";
import Register from '../components/register/Register'
import Login from '../components/login/Login'
import App from "../App";
import Home from "../components/home/Home";
import { Profile } from "../components/profile/Profile";
import { useContext } from "react";
import { AuthContext } from "../components/context/authContext";




const ProtectedRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext)
    if (!currentUser) {
        return <Navigate to="/login" />
    }
    return children
}

const router = createBrowserRouter([

    {
        path: "/",
        element: (
            <ProtectedRoute>
                <App />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "/profile/:id", element: <Profile /> },
        ],
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

export default router