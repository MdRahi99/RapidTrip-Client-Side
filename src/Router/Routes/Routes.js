import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Services/Services";
import Contact from "../../Pages/Contact/Contact";
import Register from "../../Pages/Login/Register";
import Login from "../../Pages/Login/Login";
import Blogs from "../../Pages/Blogs/Blogs";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
      ]
    }
  ]);

  export default router;