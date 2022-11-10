import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceReviews from "./ServiceReviews";

const AddedReviews = () => {
  const { _id } = useLoaderData();

  const [feedbacks, setAllFeedbacks] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:5000/feedbacks/${_id}`)
      .then((res) => res.json())
      .then((data) => setAllFeedbacks(data));
  }, [_id]);

  return <div>
    <div>
        <h1 className="p-4 bg-neutral rounded m-2 text-center text-slate-200">Total {feedbacks.length} feedbacks available here</h1>
        <div className="bg-slate-300 shadow-lg rounded p-6 my-6 mx-2">
        {
            feedbacks.map(feedback => <ServiceReviews 
                key={feedback._id}
                feedback={feedback}
                ></ServiceReviews>)
        }
        </div>
    </div>
  </div>;
};

export default AddedReviews;
