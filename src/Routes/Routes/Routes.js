import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from '../../Pages/Login/Login/Login'
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Login/Register/Register";
import Home from "../../Pages/Home/Home";
import Course from "../../Pages/Course/Course";
import FullDetails from "../../Pages/Course/FullDetails";
import CheckOut from "../../Pages/CheckOut/CheckOut";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path: '/login' ,
               element: <Login></Login>
            },
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: ()=> fetch('http://localhost:5000/course')
            },
            {
                path: '/course/:id',
                element: <FullDetails></FullDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/checkout',
                element: <CheckOut></CheckOut>
            }
        ]
    }
])