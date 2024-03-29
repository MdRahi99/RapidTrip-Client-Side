import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Services/Services";
import AddServices from "../../Pages/Services/AddServices/AddServices";
import Reviews from "../../Pages/Reviews/Reviews";
import Contact from "../../Pages/Contact/Contact";
import Register from "../../Pages/Login/Register";
import Login from "../../Pages/Login/Login";
import img from "../../Assets/Image/error-page.jpg";
import MoreDetails from "../../Pages/Services/MoreDetails/MoreDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddReviews from "../../Pages/Reviews/AddReviews";
import UpdateReviews from "../../Pages/Reviews/UpdateReviews";

const { createBrowserRouter, Link } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>, 
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://rapid-trip-server.vercel.app/service')
        },
        {
            path: '/services',
            element: <Services></Services>,
            loader: () => fetch('https://rapid-trip-server.vercel.app/services')
        },
        {
            path: '/moreDetails/:id',
            element: <MoreDetails></MoreDetails>,
            loader: ({params}) => fetch(`https://rapid-trip-server.vercel.app/services/${params.id}`)
        },
        {
            path: '/addServices',
            element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
        },
        {
            path: '/reviews',
            element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
        },
        {
            path: '/addReviews',
            element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute>
        },
        {
            path: '/update',
            element: <PrivateRoute><UpdateReviews></UpdateReviews></PrivateRoute>
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