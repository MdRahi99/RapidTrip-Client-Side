import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import img from '../../Assets/Image/feedback.jpg';

const AddReviews = () => {
  const { user } = useContext(AuthContext);
  const serviceDetails = useLoaderData();
  const { _id, title } = serviceDetails;

  const handlePlaceFeedback = event => {
    event.preventDefault();
    const form = event.target;
    const id = form.id.value;
    const name = form.name.value;
    const email = form?.email.value || "Unregistered";
    const message = form.message.value;

    const feedback = {
      id,
      serviceName: title,
      userName: name,
      email,
      message,
    };

    fetch('http://localhost:5000/feedbacks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(feedback)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.acknowledged){
            alert('Thank you for your feedback');
            form.reset();
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl text-slate-200 text-center bg-neutral shadow-lg rounded p-4 my-12">
          Give Your Feedback
        </h1>
        <form onSubmit={handlePlaceFeedback}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div className="flex flex-col gap-3">
              <input
                type="password"
                name="id"
                placeholder="Enter your Name"
                className="input input-bordered input-ghost w-full"
                defaultValue={_id}
                readOnly
                required
              />
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                className="input input-bordered input-ghost w-full"
                required
              />
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered input-ghost w-full"
              />
              <textarea
                name="message"
                className="textarea textarea-info w-full h-40"
                placeholder="Give your FeedBack"
              ></textarea>
            </div>

            <div>
              <img className="w-full h-72 rounded" src={img} alt="feedback" />
            </div>
          </div>

          <div className="flex justify-center my-6">
            <input className='px-4 py-2 bg-orange-700 hover:bg-orange-600 rounded my-2' type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
