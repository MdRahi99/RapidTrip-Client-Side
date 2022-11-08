import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, ratings, description } = service;

  return (
    <div className="card card-compact w-96 mx-auto bg-neutral shadow-xl">
      <figure>
        <img className="h-52 w-full" src={img} alt="services" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>
        <p>Ratings: {ratings}</p>

        {description.length > 100 ? (
          <div>
            {description.slice(0, 100) + "..."}
            <div className="card-actions justify-center">
              <Link to={`/moreDetails/${_id}`}>
                <button className="p-2 bg-orange-500 hover:bg-orange-600 rounded mt-6 text-slate-100 font-semibold">More Details</button>
              </Link>
            </div>
          </div>
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
