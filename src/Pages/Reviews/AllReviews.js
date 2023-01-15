import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AllReviews = ({ feedback, handleDelete, handleFeedUpdate }) => {
  const { user } = useContext(AuthContext);
  const { _id, serviceName, userName, email, message } = feedback;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold flex flex-row gap-2 items-center mb-2">
              <img className="h-12" src={user?.photoURL} alt="user" />
              <p>{userName}</p>
            </div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>

      <td className="text-xl text-slate-200">{serviceName}</td>
      <td className="text-xl text-slate-200">{message}</td>

      <th>
        <label>
          <Link to='/update'>
            <button>update</button>
          </Link>
        </label>
      </th>
      <th>
        <label onClick={() => handleDelete(_id)}>
          <button className="btn btn-ghost">X</button>
        </label>
      </th>
    </tr>
  );
};

export default AllReviews;
