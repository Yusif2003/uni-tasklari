import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Pages from "../pages/Pages";
import Price from "../pages/Price";
import Services from "../pages/Services";
import Team from "../pages/Team";


export const ROUTES = [
    {
        path:'/',
        element: <MainRoot/>,
        children: [
            {
                path:"",
                element: <Home/>
            },
            {
                path:"/pages",
                element:<Pages/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/team",
                element:<Team/>
            },
            {
                path:"/price",
                element:<Price/>
            },
            {
                path:"/blog",
                element:<Blog/>
            }
        ]
    }
]