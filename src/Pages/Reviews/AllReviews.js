import React, { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AllReviews = ({ feedback }) => {
  const { user } = useContext(AuthContext);
  const { _id, serviceName, userName, email, message } = feedback;
  const [service, setService] = useState({});

  return (
    <tr>
      <th>
        <label>
          <button>X</button>
        </label>
      </th>

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
    </tr>
  );
};

export default AllReviews;
