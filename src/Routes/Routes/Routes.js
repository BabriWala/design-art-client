import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from '../../Pages/Login/Login/Login'
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Login/Register/Register";
import Home from "../../Pages/Home/Home";
import Course from "../../Pages/Course/Course";
import FullDetails from "../../Pages/Course/FullDetails";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Blog from "../../Pages/Blog/Blog";
import FAQ from "../../Pages/FAQ/FAQ";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/login' ,
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/course',
                element: <Course></Course>,
                loader: ()=> fetch('https://design-art-server.vercel.app/course')
            },
            {
                path: '/course/:id',
                element: <FullDetails></FullDetails>,
                loader: ({params}) => fetch(`https://design-art-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({params}) => fetch(`https://design-art-server.vercel.app/course/${params.id}`)
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },  
        ]
    }
])