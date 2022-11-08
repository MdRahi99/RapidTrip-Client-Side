import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../../../Hooks/Title";

const MoreDetails = () => {
  const serviceDetails = useLoaderData();
  const { img, price, title, ratings, description } = serviceDetails;
  Title('Service Details');
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-12">
      <div className="card col-span-1 lg:col-span-2 card-compact w-full mx-auto">
        <figure>
          <img className="h-96 w-full" src={img} alt="services" />
        </figure>
        <h2 className="text-3xl text-center my-12 p-4 bg-neutral shadow-lg">
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 justify-items-center items-center">
          <div>
            <p className="text-slate-200 bg-neutral p-4 rounded">{description}</p>
          </div>
          <div className="card-body shadow-lg bg-slate-700 p-20 rounded">
            <p className="text-4xl text-orange-600 font-semibold">
              Price: ${price}
            </p>
            <p className="text-2xl">Ratings: {ratings}</p>
          </div>
        </div>
      </div>
      <div className="cols-4 bg-slate-300 mx-4 rounded">
        <h1 className="text-4xl text-center bg-neutral p-4 rounded m-6">Feedbacks</h1>
      </div>
    </div>
  );
};

export default MoreDetails;
