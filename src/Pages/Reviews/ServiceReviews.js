import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const ServiceReviews = ({ feedback }) => {
  const { user } = useContext(AuthContext);
  const { userName, message, email } = feedback;
  console.log(feedback);
  return (
    <div className="stats shadow">
      <div className="stat lg:w-60">
        <div className="flex flex-row gap-2">
          <img className="h-6 w-6" src={user?.photoURL} alt="" />
          <div className="text-slate-200">{userName}</div>
        </div>
        <div className="text-slate-200">Email: {email}</div>
      </div>

      <div className="stat lg:w-80">
        <div className="text-slate-200">Given Feedback</div>
        <div className="stat-value text-secondary text-2xl">{message}</div>
      </div>
    </div>
  );
};

export default ServiceReviews;
