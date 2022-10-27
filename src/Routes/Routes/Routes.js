import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from '../../Pages/Login/Login/Login'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path: '/login' ,
               element: <Login></Login>
            }
        ]
    }
])