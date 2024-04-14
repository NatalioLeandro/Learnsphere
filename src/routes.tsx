import { createBrowserRouter, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Page from './pages/Page';
import Courses from './pages/Courses';
import Notfound from './pages/Notfound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/About';
import EntranceExam from './pages/EntranceExam';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import Localization from './pages/Localization';
import Studant from './pages/Studant';

interface ProtectedRouteProps {

    children: React.ReactNode;

}

const ProtectedRoute = (props: ProtectedRouteProps) => {

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
        } else {
            setIsAuthenticated(true);
        }

    }, [navigate]);

    return isAuthenticated ? <>{props.children}</> : null;

}


const BrowserRouter = createBrowserRouter([
    {
        path: '/',
        element: <Page />,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/courses',
                element: <Courses />
            },
            {
                path: '/entrace-exam',
                element: <EntranceExam />
            },
            {
                path: '/feedback',
                element: <Feedback />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/localization',
                element: <Localization />
            },
            {
                path: '/student',
                element: <ProtectedRoute>
                    <Studant />
                </ProtectedRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '*',
                element: <Notfound />
            }

        ]
    },

])

export default BrowserRouter;