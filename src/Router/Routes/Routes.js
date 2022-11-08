import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Services/Services";
import Contact from "../../Pages/Contact/Contact";
import Register from "../../Pages/Login/Register";
import Login from "../../Pages/Login/Login";
import Blogs from "../../Pages/Blogs/Blogs";
import img from "../../Assets/Image/error-page.jpg";

const { createBrowserRouter, Link } = require("react-router-dom");

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
    },
    {
        path: '*',
        element: <div className="text-center">
            <img className="h-96 mx-auto mt-40 mb-6" src={img} alt="error-img" />
            <Link to='/' className="px-20 py-2 bg-orange-500 text-slate-900 my-6 rounded font-bold hover:bg-orange-600">Back</Link>
        </div>
    }
  ]);

  export default router;