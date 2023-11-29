import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Home/Category/Category";
import Courses from "../Pages/Courses/Courses/Courses";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
           {
            path:'/category/:id',
            element:<Category></Category>,
            loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
           },
        ])
    }
])

export default router;