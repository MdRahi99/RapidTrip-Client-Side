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

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this feedback"
    );
    if (proceed) {
      fetch(`http://localhost:5000/feedbacks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            const remaining = feedbacks.filter((remove) => remove._id !== id);
            setFeedbacks(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-slate-200 bg-neutral p-4 rounded my-12">
        You have {feedbacks.length} feedbacks
      </h1>

      {user?.email ? (
        <div className="overflow-x-auto w-full flex flex-row gap-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>X</label>
                </th>
                <th>Name</th>
                <th>Selected Service</th>
                <th>Given FeedBack</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <AllReviews
                  key={feedback._id}
                  feedback={feedback}
                  handleDelete={handleDelete}
                ></AllReviews>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-20 rounded shadow-lg bg-neutral">
          <p className="text-3xl text-center text-slate-200 font-bold p-4">
            No reviews were added
          </p>
        </div>
      )}
    </div>
  );
};

export default Reviews;
