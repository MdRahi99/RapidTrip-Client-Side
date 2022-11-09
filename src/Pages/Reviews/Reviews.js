import React, { useContext, useEffect, useState } from "react";
import Title from "../../Hooks/Title";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import AllReviews from "./AllReviews";

const Reviews = () => {
  Title("My Reviews");
  const { user } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/feedbacks?email=${user?.email}`)
      .then((res) => res.json(res))
      .then((data) => setFeedbacks(data));
  }, [user?.email]);

  return (
    <div>
      <h1 className="text-3xl text-center text-slate-200 bg-neutral p-4 rounded my-12">
        You have {feedbacks.length} feedbacks
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                    X
                </label>
              </th>
              <th>Name</th>
              <th>Selected Service</th>
              <th>Given FeedBack</th>
            </tr>
          </thead>
          <tbody>
            {
                feedbacks.map(feedback => <AllReviews
                    key={feedback._id}
                    feedback={feedback}
                ></AllReviews>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;
