import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Home/Category/Category";
import Courses from "../Pages/Courses/Courses/Courses";
import CourseLayout from "../layouts/CourseLayout";
import Dashboard from "../Pages/Courses/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            
        ])
    },
    {
        path: "/",
        element: <CourseLayout></CourseLayout>,
        children: ([

            {
                path: '/course/:id',
                element:<Courses></Courses>,
                loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path:'dashboard',
                element:<Dashboard></Dashboard>
            }
        ])
    }
])

export default router;