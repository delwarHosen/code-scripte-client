import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../Pages/Home/Home/Category/Category";
import Courses from "../Pages/Courses/Courses/Courses";
import CourseLayout from "../layouts/CourseLayout";
import Dashboard from "../Pages/Courses/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ShowError from "../Pages/Shared/ShowError/ShowError";
import Contact from "../Pages/Courses/Dashboard/Contact/Contact";
import Blog from "../Pages/Courses/Dashboard/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ShowError></ShowError>,
        children: ([
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ])
    },
    {
        path: 'category',
        element: <Main></Main>,
        errorElement: <ShowError></ShowError>,
        children: ([
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },

        ])
    },
    {
        path: "courses",
        element: <CourseLayout></CourseLayout>,
        errorElement: <ShowError></ShowError>,
        children: ([

            {
                path: ':id',
                element: <PrivateRoutes><Courses></Courses></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }

        ])
    },
    {
        path: '/',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ShowError></ShowError>,
        children: ([
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
        ])
    }
])

export default router;