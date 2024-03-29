import React from "react";

import Title from "../../../Hooks/Title";

const AddServices = () => {
  Title("AddServices");

  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_id = form.service_id.value;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const newService = {
      service_id,
      title,
      img,
      price,
      description,
      rating,
    };
    fetch("https://rapid-trip-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Successfully Added Service");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="my-12">
      <form onSubmit={handleAddService} className="bg-neutral p-4">
        <div className="flex-col">
          <div className="text-center lg:text-left my-6">
            <h1 className="text-2xl text-center bg-slate-500 text-slate-200 p-4 rounded font-bold">
              Add Services now!
            </h1>
          </div>
          <div className="flex-shrink-0 w-full mx-auto max-w-lg shadow-2xl bg-base-200 text-slate-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Id</span>
                </label>
                <input
                  name="service_id"
                  type="text"
                  placeholder="service_id"
                  className="input input-bordered bg-slate-200 text-slate-900"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="title"
                  className="input input-bordered bg-slate-200 text-slate-900"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  name="img"
                  type="text"
                  placeholder="Enter your image url"
                  className="input input-bordered bg-slate-200 text-slate-900"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="text"
                  placeholder="price"
                  className="input input-bordered bg-slate-200 text-slate-900"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  name="rating"
                  type="text"
                  placeholder="rating"
                  className="input input-bordered bg-slate-200 text-slate-900"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  name="description"
                  id=""
                  cols="10"
                  rows="5"
                  className="bg-slate-200 text-slate-900"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
