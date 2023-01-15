import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Title from "../../../Hooks/Title";
import AddReviews from "../../Reviews/AddReviews";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import AddedReviews from "../../Reviews/AddedReviews";

const MoreDetails = () => {
  const { user } = useContext(AuthContext);
  const serviceDetails = useLoaderData();
  Title("Service Details");
  const { img, price, title, ratings, description } = serviceDetails;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-12">
        <div className="card col-span-1 lg:col-span-6 card-compact w-full mx-auto">
          <figure>
            <img className="h-96 w-full" src={img} alt="services" />
          </figure>
          <h2 className="text-3xl text-center my-12 p-4 bg-neutral shadow-lg">
            {title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-items-center items-center">
            <div>
              <p className="text-slate-200 bg-neutral p-4 rounded">
                {description}
              </p>
            </div>
            <div className="card-body shadow-lg bg-slate-700 p-2 rounded">
              <p className="text-4xl text-orange-600 font-semibold">
                Price: ${price}
              </p>
              <p className="text-2xl">Ratings: {ratings}</p>
            </div>
          </div>
        </div>
        <div className="cols-4 col-span-1 lg:col-span-6 bg-slate-300 mx-4 rounded my-6 lg:my-0">
          <h1 className="text-4xl text-center bg-neutral p-4 rounded m-6">
            Feedbacks
          </h1>
          {
          user?.email ? 
          <AddedReviews></AddedReviews> 
          : 
          <div className="bg-slate-800 p-4 m-3 rounded text-center">
            <p>Please login to view others review.</p>
            <button className="p-2 my-4 rounded bg-orange-700 hover:bg-orange-600">
            <Link to="/login">Login</Link>
            </button>
          </div>}
        </div>
      </div>

      {user?.email ? (
        <AddReviews></AddReviews>
      ) : (
        <div className="px-6">
          <p>Please login to add a review.</p>
          <button className="p-2 my-4 rounded bg-orange-700 hover:bg-orange-600">
            <Link to="/login">Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreDetails;
